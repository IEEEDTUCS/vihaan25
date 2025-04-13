package handlers

import (
	"context"
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/IEEEDTUCS/vihaan25/backend/internal/models"
	"github.com/golang-jwt/jwt/v5"
	"github.com/labstack/echo/v4"
	"github.com/labstack/gommon/log"
)

func generateState(length int) (string, error) {
	b := make([]byte, length)
	if _, err := rand.Read(b); err != nil {
		return "", err
	}
	return base64.URLEncoding.EncodeToString(b), nil
}

type oauthState struct {
	State string
	RedirectUri string
}

func HandleGoogleAuth(c echo.Context) error {
	ctx := c.(*models.ServerContext)

	redirectURI := c.QueryParam("redirect_uri")
	if redirectURI == "" {
		return echo.NewHTTPError(http.StatusBadRequest, "Missing redirect_uri")
	}

	//create a state for validation
	state, err := generateState(32)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Failed to generate state")
	}

	stateObj := oauthState {
		State: state,
		RedirectUri: redirectURI,
	}

	stateBytes, err := json.Marshal(stateObj)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Failed to generate state")
	}
	stateEncoded := base64.URLEncoding.EncodeToString(stateBytes)


	// Set the state in a secure, short-lived cookie
	c.SetCookie(&http.Cookie{
		Name:     "oauthstate",
		Value:    state,
		MaxAge:   300, // 5 minutes
		HttpOnly: true,
		Secure:   false, // Make false if testing on HTTP
		Path:     "/",
		SameSite: http.SameSiteLaxMode,
	})

	url := ctx.OAuthConfig.AuthCodeURL(stateEncoded)
	return c.Redirect(http.StatusTemporaryRedirect, url)
}

func HandleGoogleRedirect(c echo.Context) error {
	ctx := c.(*models.ServerContext)
	db := ctx.DB

	stateEncoded := c.QueryParam("state")

	stateBytes, err := base64.URLEncoding.DecodeString(stateEncoded)
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "Invalid state format")
	}

	var stateObj oauthState
	if err := json.Unmarshal(stateBytes, &stateObj); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "Invalid state object")
	}

	cookie, err := c.Cookie("oauthstate")
	if err != nil || cookie.Value != stateObj.State {
		log.Error(err)
		return echo.NewHTTPError(http.StatusUnauthorized, "Invalid OAuth state")
	}

	code := c.QueryParam("code")
	token, err := ctx.OAuthConfig.Exchange(context.Background(), code)
	if err != nil {
		log.Error(err)
		return echo.NewHTTPError(http.StatusInternalServerError, "Failed to exchange token")
	}

	client := ctx.OAuthConfig.Client(context.Background(), token)
	resp, err := client.Get("https://www.googleapis.com/oauth2/v2/userinfo")
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Failed to fetch user info")
	}

	var gUser models.GoogleUser
	if err := json.NewDecoder(resp.Body).Decode(&gUser); err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Failed to parse user info")
	}

	var user models.User
	if err := db.FirstOrCreate(&user, &models.User{
		GoogleID: gUser.ID,
		Email: gUser.Email,
		Name: gUser.Name,
		Picture: gUser.Picture,
	}).Error; err != nil {
		log.Errorf("[Google Oauth Error]: %v", err)
		return c.String(http.StatusInternalServerError, "Error connecting user")
	}

	//log.Printf(user.ID.String())

	accessTokenClaims := models.JwtTokenClaims {
		UserID: user.ID.String(),
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(60 * time.Hour)),
		},
	}
	
	refreshTokenClaims := models.JwtTokenClaims {
		UserID: user.ID.String(),
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(2 * 24 * time.Hour)),
		},
	}

	jwtSecret := []byte(ctx.Vars.JWTSecret)
	
	accessToken, err := jwt.NewWithClaims(jwt.SigningMethodHS256, accessTokenClaims).SignedString(jwtSecret)
	if err != nil {
		log.Errorf("[JWT Error]: %v", err)
		return echo.NewHTTPError(http.StatusInternalServerError, "Failed to generate tokens")
	}

	refreshToken, err := jwt.NewWithClaims(jwt.SigningMethodHS256, refreshTokenClaims).SignedString(jwtSecret)
	if err != nil {
		log.Errorf("[JWT Error]: %v", err)
		return echo.NewHTTPError(http.StatusInternalServerError, "Failed to generate tokens")
	}

	frontendRedirectUrl := ctx.Vars.FrontendUrl + stateObj.RedirectUri + fmt.Sprintf("?accessToken=%s&refreshToken=%s", accessToken, refreshToken)

	return c.Redirect(http.StatusPermanentRedirect, frontendRedirectUrl)
}

func GetMe(c echo.Context) error {
	ctx := c.(*models.ServerContext)
	userID := ctx.CurrentUserID
	db := ctx.DB

	var user models.User
	if err := db.Where("id = ?", userID).First(&user).Error; err != nil {
		log.Errorf("[UserModel] Error fetching User: %v", err)
		return echo.NewHTTPError(http.StatusInternalServerError, "Unable to find User")
	}

	return c.JSON(http.StatusOK, user)
}

func HandleRefresh(c echo.Context) error {
	ctx := c.(*models.ServerContext)
	db := ctx.DB
	jwtSecret := []byte(ctx.Vars.JWTSecret)

	type RefreshRequest struct {
		RefreshToken string `json:"refreshToken"`
	}

	var req RefreshRequest
	if err := c.Bind(&req); err != nil || req.RefreshToken == "" {
		return echo.NewHTTPError(http.StatusBadRequest, "Invalid refresh request")
	}
	token, err := jwt.ParseWithClaims(req.RefreshToken, &models.JwtTokenClaims{}, func(t *jwt.Token) (interface{}, error) {
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, echo.NewHTTPError(http.StatusUnauthorized, "unexpected signing method")
		}
		return jwtSecret, nil
	})

	if err != nil || !token.Valid {
		log.Errorf("[JWT Parsing Error]:%v", err)
		return echo.NewHTTPError(http.StatusUnauthorized, "invalid token")
	}
	claims, ok := token.Claims.(*models.JwtTokenClaims); 
	if !ok {
		return echo.NewHTTPError(http.StatusUnauthorized, "invalid claims")
	}

	userID := claims.UserID
	var user models.User
	if err := db.Where("id = ?", userID).First(&user).Error; err != nil {
		log.Errorf("[UserModel] Error fetching User: %v", err)
		return echo.NewHTTPError(http.StatusInternalServerError, "Unable to find User")
	}
	
	accessTokenClaims := models.JwtTokenClaims {
		UserID: user.ID.String(),
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(60 * time.Hour)),
		},
	}
	
	refreshTokenClaims := models.JwtTokenClaims {
		UserID: user.ID.String(),
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(2 * 24 * time.Hour)),
		},
	}
	
	accessToken, err := jwt.NewWithClaims(jwt.SigningMethodHS256, accessTokenClaims).SignedString(jwtSecret)
	if err != nil {
		log.Errorf("[JWT Error]: %v", err)
		return echo.NewHTTPError(http.StatusInternalServerError, "Failed to generate tokens")
	}

	refreshToken, err := jwt.NewWithClaims(jwt.SigningMethodHS256, refreshTokenClaims).SignedString(jwtSecret)
	if err != nil {
		log.Errorf("[JWT Error]: %v", err)
		return echo.NewHTTPError(http.StatusInternalServerError, "Failed to generate tokens")
	}

	type RefreshResponse struct {
		AccessToken string `json:"accessToken"`
		RefreshToken string `json:"refreshToken"`
	}

	res := RefreshResponse{
		accessToken,
		refreshToken,
	}

	return c.JSON(http.StatusOK, res)
}

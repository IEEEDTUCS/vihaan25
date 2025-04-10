package middlewares

import (
	"net/http"
	"strings"

	"github.com/IEEEDTUCS/vihaan25/backend/internal/models"
	"github.com/golang-jwt/jwt/v5"
	"github.com/labstack/echo/v4"
	"github.com/labstack/gommon/log"
)

func AuthMiddleware(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		ctx := c.(*models.ServerContext)
		jwtSecret := []byte(ctx.Vars.JWTSecret)

		authHeader := c.Request().Header.Get("Authorization")
		if authHeader == "" || !strings.HasPrefix(authHeader, "Bearer ") {
			return echo.NewHTTPError(http.StatusUnauthorized, "missing or invalid token")
		}

		tokenStr := strings.TrimPrefix(authHeader, "Bearer ")

		token, err := jwt.ParseWithClaims(tokenStr, &models.JwtTokenClaims{}, func(t *jwt.Token) (interface{}, error) {
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
			return echo.NewHTTPError(http.StatusUnauthorized, "invalid token")
		}

		ctx.CurrentUserID = claims.UserID
		return next(ctx)
	}
}

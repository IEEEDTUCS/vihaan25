package server

import (
	"fmt"

	"github.com/IEEEDTUCS/vihaan25/backend/internal/handlers"
	"github.com/IEEEDTUCS/vihaan25/backend/internal/middlewares"
	//"github.com/IEEEDTUCS/vihaan25/backend/internal/middlewares"
	"github.com/IEEEDTUCS/vihaan25/backend/internal/models"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"golang.org/x/oauth2"
	"gorm.io/gorm"
)

type Server struct {
	*echo.Echo
	Vars models.EnvVars

	OAuthConfig oauth2.Config
	DB *gorm.DB
}


func NewServer() *Server {
	e := echo.New()
	vars := models.LoadVars()
	oauthConfig := GenerateOAuthConfig(vars)
	db := InitDB(vars)

	return &Server{
		e,
		vars,
		oauthConfig,
		db,
	}
}

func (s *Server) RegisterRoutes() {
	//s.Static("/", "public")
	//s.Static("/_next", "public/_next")

	//s.File("/", "public/index.html")
	//s.File("/quiz", "public/quiz.html")
	
	api := s.Group("/api")

	api.Use(func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			sc := &models.ServerContext{
				Context: c,
				Vars: s.Vars,
				OAuthConfig: s.OAuthConfig,
				DB: s.DB,
			};
			return next(sc);
		}
	})

	api.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{ s.Vars.FrontendUrl, },
	}))

	api.Use(middleware.Logger())

	api.GET("/auth", handlers.HandleGoogleAuth)
	api.GET("/auth/redirect", handlers.HandleGoogleRedirect)
	api.POST("/auth/refresh", handlers.HandleRefresh)

	api.GET("/quiz/leaderboard", handlers.LeaderboardHandler)

	//api.Use(middlewares.AuthMiddleware)
	
	api.GET("/auth/me", handlers.GetMe, middlewares.AuthMiddleware)
	api.GET("/quiz/today", handlers.GetTodaysQuiz, middlewares.AuthMiddleware)
	api.POST("/quiz/answer", handlers.SubmitQuizAnswer, middlewares.AuthMiddleware)

	api.GET("/quiz/leaderboard", handlers.LeaderboardHandler)
} 


func (s *Server) Run() {
	s.RegisterRoutes()
	s.Logger.Fatal(s.Start(fmt.Sprintf(":%s", s.Vars.Port)))
}

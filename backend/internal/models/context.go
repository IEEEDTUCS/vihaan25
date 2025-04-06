package models

import (
	"github.com/labstack/echo/v4"
	"golang.org/x/oauth2"
	"gorm.io/gorm"
)

type ServerContext struct {
	echo.Context

	Vars EnvVars
	OAuthConfig oauth2.Config

	DB *gorm.DB

	CurrentUserID string
}


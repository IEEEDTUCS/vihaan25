package server

import (
	"github.com/IEEEDTUCS/vihaan25/backend/internal/models"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

func GenerateOAuthConfig(vars models.EnvVars) oauth2.Config {
	return oauth2.Config{
		ClientID: vars.GoogleClientId,
		ClientSecret: vars.GoogleClientSecret,
		RedirectURL: vars.GoogleRedirectUrl,
		Scopes: []string{
			"https://www.googleapis.com/auth/userinfo.email",
			"https://www.googleapis.com/auth/userinfo.profile",
		},
		Endpoint: google.Endpoint,
	}
}

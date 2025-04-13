package models

import (
	"os"

	"github.com/joho/godotenv"
)

type EnvVars struct {
	Port string
	GoogleClientId string
	GoogleClientSecret string
	GoogleRedirectUrl string
	JWTSecret string
	DBUrl string
	FrontendUrl string
}

func LoadVars() EnvVars {
	if os.Getenv("ENV") != "production" {
		err := godotenv.Load()
		if err != nil {
			panic("Failed to load env variables.")
		}
	}
	
	port := os.Getenv("PORT")
	if port == "" {
		port = "1323"
	}

	googleClientId := os.Getenv("GOOGLE_CLIENT_ID")
	if googleClientId == "" {
		panic("Missing variable: GOOGLE_CLIENT_ID")
	}

	googleClientSecret := os.Getenv("GOOGLE_CLIENT_SECRET")
	if googleClientSecret == "" {
		panic("Missing variable: GOOGLE_CLIENT_SECRET")
	}

	googleRedirectUrl := os.Getenv("GOOGLE_REDIRECT_URL")
	if googleRedirectUrl == "" {
		panic("Missing variable: GOOGLE_REDIRECT_URL")
	}

	jwtSecret := os.Getenv("JWT_SECRET")
	if jwtSecret == "" {
		panic("Missing variable: JWT_SECRET")
	}
	
	dbUrl := os.Getenv("DATABASE_URL")
	if dbUrl == "" {
		panic("Missing variable: DATABASE_URL")
	}
	
	frontendUrl := os.Getenv("FRONTEND_URL")

	return EnvVars{
		Port: port,
		GoogleClientId: googleClientId,
		GoogleClientSecret: googleClientSecret,
		GoogleRedirectUrl: googleRedirectUrl,
		JWTSecret: jwtSecret,
		DBUrl: dbUrl,
		FrontendUrl: frontendUrl,
	}
}

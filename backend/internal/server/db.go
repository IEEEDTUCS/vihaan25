package server

import (
	"fmt"

	"github.com/IEEEDTUCS/vihaan25/backend/internal/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func InitDB(vars models.EnvVars) *gorm.DB {
	dsn := vars.DBUrl;

	db, err := gorm.Open(postgres.New(postgres.Config{
		DSN: dsn,
		PreferSimpleProtocol: true,
	}))

	if err != nil {
		panic(fmt.Sprintf("[DB Init Error]: %v", err))
	}

	err = db.AutoMigrate(&models.User{}, &models.QuizQuestion{}, &models.QuizOption{}, &models.UserAnswer{})
	if err != nil {
		panic(fmt.Sprintf("[DB Migration Error]: %v", err))
	}

	err = models.SeedQuestions(db)
	if err != nil {
		panic("seed fail")
	}

	return db
}

package models

import (
	"github.com/golang-jwt/jwt/v5"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type JwtTokenClaims struct {
	UserID string `json:"user_id"`
	jwt.RegisteredClaims
}

type GoogleUser struct {
	ID      string `json:"id" gorm:"primaryKey"`
	Email   string `json:"email" gorm:"unique; not null"`
	Name    string `json:"name" gorm:"unique; not null"`
	Picture string `json:"picture"`
}

type User struct {
	ID uuid.UUID `gorm:"type:uuid;primaryKey" json:"userId"`

	GoogleID string `gorm:"unique; not null" json:"-"`
	Email   string `json:"email" gorm:"unique; not null"`
	Name    string `json:"name" gorm:"not null"`
	Picture string `json:"picture"`

	QuizScore int `json:"quizScore" gorm:"not null;default:0"`
}

func (u *User) BeforeCreate(tx *gorm.DB) (err error) {
	u.ID = uuid.New()
	return
}

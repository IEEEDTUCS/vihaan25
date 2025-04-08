package models

import (
	"log"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type QuizOption struct {
	gorm.Model `json:"-"`
	
	ID uuid.UUID `json:"id" gorm:"primaryKey"`
	OptionText string `json:"optionText" gorm:"not null"`
	
	QuestionID uuid.UUID `json:"-"`
	Question QuizQuestion `json:"-"`
}

type QuizQuestion struct {
	gorm.Model `json:"-"`

	ID uuid.UUID `json:"id" gorm:"primaryKey"`
	Date time.Time `json:"date" gorm:"unique; not null"`
	QuestionTitle string `json:"questionTitle" gorm:"not null"`

	Options []QuizOption `json:"options" gorm:"foreignKey:QuestionID"`

	CorrectOptionID uuid.UUID `json:"-"`
}

type UserAnswer struct {
    gorm.Model
    ID uuid.UUID `gorm:"type:uuid;primaryKey"`

    UserID uuid.UUID
    User   User

    QuestionID uuid.UUID
    Question   QuizQuestion

    SelectedOptionID uuid.UUID
    SelectedOption   QuizOption

    IsCorrect bool
	Position int
}

func (o *QuizOption) BeforeCreate(tx *gorm.DB) (err error) {
	o.ID = uuid.New()
	return
}

func (q *QuizQuestion) BeforeCreate(tx *gorm.DB) (err error) {
	q.ID = uuid.New()
	return
}

func (ua *UserAnswer) BeforeCreate(tx *gorm.DB) (err error) {
	ua.ID = uuid.New()
	return
}

func SeedQuestions(db *gorm.DB) error {
	questions := []string{
		"What is the capital of France?",
		"Which planet is known as the Red Planet?",
		"What is the chemical symbol for Gold?",
		"Who wrote 'Romeo and Juliet'?",
		"What is the fastest land animal?",
	}

	options := [][]string{
		{"Paris", "Berlin", "Madrid", "Rome"},
		{"Earth", "Venus", "Mars", "Jupiter"},
		{"Au", "Ag", "Gd", "Go"},
		{"Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"},
		{"Cheetah", "Leopard", "Lion", "Tiger"},
	}

	correctIndices := []int{0, 2, 0, 1, 0}

	for i := 0; i < 5; i++ {
		question := QuizQuestion{
			Date:          time.Now().AddDate(0, 0, i).Truncate(24 * time.Hour),
			QuestionTitle: questions[i],
		}

		if err := db.First(&question).Error; err == nil {
			continue;
		}

		// Add placeholder ID for now, set actual CorrectOptionID after options are added
		if err := db.Create(&question).Error; err != nil {
			log.Printf("Error creating question %d: %v", i, err)
			return err
		}

		var createdOptions []QuizOption
		for j, optText := range options[i] {
			option := QuizOption{
				ID:         uuid.New(),
				OptionText: optText,
				QuestionID: question.ID,
			}
			if err := db.Create(&option).Error; err != nil {
				log.Printf("Error creating option: %v", err)
				return err
			}
			createdOptions = append(createdOptions, option)

			// Assign correct option if index matches
			if j == correctIndices[i] {
				question.CorrectOptionID = option.ID
			}
		}

		// Update question with correct option ID
		if err := db.Model(&question).Update("CorrectOptionID", question.CorrectOptionID).Error; err != nil {
			log.Printf("Error updating CorrectOptionID: %v", err)
			return err
		}
	}

	log.Println("✅ Quiz questions seeded successfully.")
	return nil
}

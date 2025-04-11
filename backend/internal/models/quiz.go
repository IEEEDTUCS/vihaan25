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
		"Sample test question for April 11. What is 2 + 2?",
		`What does the “undefined” in "undefined behavior" in C actually mean?`,
		`What does IEEE actually stand for?`,
		`You’re running late. Which of the following is the fastest way to reach your lecture hall?`,
		`What’s the speed of light in vacuum?`,
		`What’s the output of console.log(typeof NaN) in JavaScript?`,
		`What’s the worst time to find a bug?`,
	}

	options := [][]string{
		{"3", "4", "5", "22"}, // sample
		{
			"Your code is just mysterious",
			"The compiler decides to play dice",
			"It’s a feature, not a bug",
			"Anything can happen—including summoning demons",
		},
		{
			"International Engineering Elite Empire",
			"Institute of Electrical and Electronics Engineers",
			"I Eat Extra Energy",
			"Intergalactic Engineers’ Extraordinary Enterprise",
		},
		{
			"Teleportation",
			"Borrowing a cycle",
			"Thinking fast",
			"“Bhai, attendance lagwa dena.”",
		},
		{
			"Fast enough to escape DTU queues",
			"3 x 10^9 m/s",
			"Same as Wi-Fi",
			"Slower than JEE results",
		},
		{
			"NaN",
			"\"number\"",
			"\"undefined\"",
			"JS broke again",
		},
		{
			"During compile",
			"During deployment",
			"During a demo",
			"While sleeping",
		},
	}

	correctIndices := []int{1, 3, 1, 3, 2, 1, 2}

	startDate := time.Date(2025, 4, 12, 0, 0, 0, 0, time.Local).Truncate(24 * time.Hour)

	for i := 0; i < len(questions); i++ {
		question := QuizQuestion{
			Date:          startDate.AddDate(0, 0, i),
			QuestionTitle: questions[i],
		}
		
		var existing QuizQuestion
		if err := db.Where("date = ?", question.Date).First(&existing).Error; err == nil {
			// Question already exists for this date
			continue
		}

		if err := db.Create(&question).Error; err != nil {
			log.Printf("Error creating question %d: %v", i, err)
			return err
		}

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

			if j == correctIndices[i] {
				question.CorrectOptionID = option.ID
			}
		}

		if err := db.Model(&question).Update("CorrectOptionID", question.CorrectOptionID).Error; err != nil {
			log.Printf("Error updating CorrectOptionID: %v", err)
			return err
		}
	}

	log.Println("✅ All quiz questions (including April 11 test) seeded successfully.")
	return nil
}

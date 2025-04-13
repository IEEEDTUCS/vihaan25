package handlers

import (
	"math"
	"net/http"
	"time"

	"github.com/IEEEDTUCS/vihaan25/backend/internal/models"
	"github.com/google/uuid"
	"github.com/labstack/echo/v4"
	"gorm.io/gorm"
)


func GetTodaysQuiz(c echo.Context) error {
	ctx := c.(*models.ServerContext)
	db := ctx.DB
	
	userIDRaw := ctx.CurrentUserID

	userID, err := uuid.Parse(userIDRaw)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Invalid user ID")
	}

	today := time.Now().Truncate(24 * time.Hour)

	var question models.QuizQuestion
	err = db.Preload("Options").Where("date = ?", today).First(&question).Error

	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.JSON(http.StatusNotFound, echo.Map{
				"error": "No quiz question found for today",
			})
		}
		return c.JSON(http.StatusInternalServerError, echo.Map{
			"error": "Failed to fetch today's quiz question",
		})
	}
	
	var existingAnswer models.UserAnswer
	err = db.Where("user_id = ? AND question_id = ?", userID, question.ID).First(&existingAnswer).Error
	if err == nil {
		return echo.NewHTTPError(http.StatusBadRequest, "You have already answered this question")
	} else if err != gorm.ErrRecordNotFound {
		return echo.NewHTTPError(http.StatusInternalServerError, "Database error")
	}

	return c.JSON(http.StatusOK, question)
}

func SubmitQuizAnswer(c echo.Context) error {
	ctx := c.(*models.ServerContext)
	db := ctx.DB
	userIDRaw := ctx.CurrentUserID

	userID, err := uuid.Parse(userIDRaw)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Invalid user ID")
	}

	type Request struct {
		QuestionID uuid.UUID `json:"questionId" validate:"required"`
		OptionID   uuid.UUID `json:"optionId" validate:"required"`
	}

	var req Request
	if err := c.Bind(&req); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "Invalid request")
	}

	var existingAnswer models.UserAnswer
	err = db.Where("user_id = ? AND question_id = ?", userID, req.QuestionID).First(&existingAnswer).Error
	if err == nil {
		return echo.NewHTTPError(http.StatusBadRequest, "You have already answered this question")
	} else if err != gorm.ErrRecordNotFound {
		return echo.NewHTTPError(http.StatusInternalServerError, "Database error")
	}

	// Fetch the question and verify the correct option
	var question models.QuizQuestion
	if err := db.First(&question, "id = ?", req.QuestionID).Error; err != nil {
		return echo.NewHTTPError(http.StatusNotFound, "Question not found")
	}

	isCorrect := req.OptionID == question.CorrectOptionID

	answer := models.UserAnswer{
		ID:         uuid.New(),
		UserID:     userID,
		QuestionID: req.QuestionID,
		SelectedOptionID:   req.OptionID,
		IsCorrect:  isCorrect,
	}

	var user models.User
	if isCorrect {
		// Get how many users have already answered correctly
		var count int64
		db.Model(&models.UserAnswer{}).
			Where("question_id = ? AND is_correct = TRUE", req.QuestionID).
			Count(&count)

		position := int(count) + 1
		decay := 2
		minScore := 10
		score := int(math.Max(float64(100-(position-1)*decay), float64(minScore)))

		answer.Position = position

		// Save answer and update user score
		if err := db.Create(&answer).Error; err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Failed to save answer")
		}
		
		if err := db.Model(&models.User{}).Where("id = ?", userID).UpdateColumn("quiz_score", gorm.Expr("quiz_score + ?", score)).Error; err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Failed to fetch user score")
		}
	} else {
		// Just save the incorrect answer
		if err := db.Create(&answer).Error; err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Failed to save answer")
		}
	}
	if err := db.Select("quiz_score").Where("id = ?", userID).First(&user).Error; err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Failed to update user score")
	}

	return c.JSON(http.StatusOK, echo.Map{
		"message":   "Answer submitted successfully",
		"isCorrect": isCorrect,
		"score": user.QuizScore,
	})
}

func LeaderboardHandler(c echo.Context) error {
	ctx := c.(*models.ServerContext)
	db := ctx.DB

	var users []models.User
	if err := db.Order("quiz_score DESC").Limit(20).Find(&users).Error; err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Failed to fetch leaderboard")
	}

	type LeaderboardEntry struct {
		Name      string `json:"name"`
		Email     string `json:"email"`
		Score     int    `json:"score"`
		Rank      int    `json:"rank"`
	}

	var leaderboard []LeaderboardEntry
	for i, user := range users {
		leaderboard = append(leaderboard, LeaderboardEntry{
			Name:  user.Name,
			Email: user.Email,
			Score: user.QuizScore,
			Rank:  i + 1,
		})
	}

	return c.JSON(http.StatusOK, leaderboard)
}

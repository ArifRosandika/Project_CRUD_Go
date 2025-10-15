package models


type Film struct {
	ID uint `json:"id" gorm:"primaryKey"`
	Name string `json:"name"`
	Picture string `json:"picture"`
	Showtime string `json:"showtime"`
	Description string `json:"description"`
}
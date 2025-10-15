package main

import (
	"backend/database"
	"backend/models"
	"backend/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Use(cors.Default())

	r.Static("/uploads", "./uploads")

	database.ConnectDb()

	database.DB.Migrator().DropTable(&models.Film{})
	database.DB.AutoMigrate(&models.Film{})

	routes.FilmRouter(r)

	r.Run(":8080")
}

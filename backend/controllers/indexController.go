package controllers

import (
	"backend/database"
	"backend/models"
	"io"
	"net/http"
	"net/url"
	"strings"

	"github.com/gin-gonic/gin"
)

func CreateFilm(c *gin.Context) {
    var film models.Film

    if err := c.ShouldBindJSON(&film); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    if err := database.DB.Create(&film).Error; err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    c.JSON(http.StatusOK, film)
}

func GetFilm(c *gin.Context) {
	var films []models.Film
	database.DB.Find(&films)
	c.JSON(http.StatusOK, films)
}

func GetFIlmById(c *gin.Context) {
	id := c.Param("id")
	var film models.Film

	if err := database.DB.First(&film, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Film not found"})
		return
	}

	c.JSON(http.StatusOK, film)
}

func UpdateFilm(c *gin.Context) {
	id := c.Param("id")
	var film models.Film

	if err := database.DB.First(&film, id).Error;  err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}

	var input models.Film

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	database.DB.Model(&film).Updates(input)
	c.JSON(http.StatusOK, film)
}

func DeleteFilm(c *gin.Context) {
	id := c.Param("id")
	var film models.Film

	if err := database.DB.First(&film, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Film not found"})
	}

	database.DB.Delete(&film)
	c.JSON(http.StatusOK, gin.H{"message" : "Film deleted successfully"})
}

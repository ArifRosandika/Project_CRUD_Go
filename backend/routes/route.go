package routes

import (
	"github.com/gin-gonic/gin"
	"backend/controllers"
)

func FilmRouter(r *gin.Engine) {
	r.POST("/films/create", controllers.CreateFilm)
	r.GET("/films", controllers.GetFilm)
	r.GET("/films/:id", controllers.GetFIlmById)
	r.PUT("/films/edit/:id", controllers.UpdateFilm)
	r.DELETE("/films/delete/:id", controllers.DeleteFilm)
	r.GET("/proxy", controllers.ProxyImage)
}
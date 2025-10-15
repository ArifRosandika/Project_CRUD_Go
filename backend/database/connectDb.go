package database 
import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDb() {
	host := "localhost"
	user := "postgres"
	password := "1307"
	dbname := "CrudGO_db"
	port := "5432"

	dsn := fmt.Sprintf("host=%1s user=%2s password=%3s dbname=%4s port=%5s sslmode=disable", host, user, password, dbname, port)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("Failed to connect to database\n", err)
		os.Exit(1)
	}

	DB = db
	fmt.Println("Database Connected")
}
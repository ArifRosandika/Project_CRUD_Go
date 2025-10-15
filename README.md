# 🧩 Project CRUD — Go + Next.js + PostgreSQL

A full-stack CRUD (Create, Read, Update, Delete) web application built with **Go (Golang)** for the backend API, **Next.js (TypeScript)** for the frontend, and **PostgreSQL** as the database.

---

## 📂 Project Structure

Project_CRUD_Go/
├── backend/ # Go backend API
│ ├── controllers/ # Request handlers
│ │ └── indexController.go
│ ├── database/ # Database connection
│ │ └── connectDB.go
│ ├── models/ # Data models
│ │ └── model.go
│ ├── routes/ # API route definitions
│ │ └── route.go
│ ├── tmp/ # Temporary folder (if needed)
│ ├── main.go # Main entry point
│ ├── go.mod # Go module dependencies
│ ├── go.sum # Dependency checksums
│ └── test.rest # API test file
│
└── frontend/ # Next.js frontend (TypeScript)
├── .next/ # Build cache (auto-generated)
├── node_modules/ # Dependencies (auto-generated)
├── public/ # Static assets
├── src/ # Main source code
│ ├── app/ # App router pages
│ │ ├── add/ # Add new record page
│ │ ├── edit/[id]/ # Edit record page (dynamic route)
│ │ └── page.tsx # Main list page
│ ├── component/ # Reusable UI components
│ │ ├── FilmCard.tsx
│ │ ├── FilmForm.tsx
│ │ └── Navbar.tsx
│ ├── lib/ # Helper libraries
│ │ └── TS/
│ │ ├── apis.ts
│ │ ├── actions.ts
│ │ ├── declaration.d.ts
│ │ └── globals.css
│ └── utils/ # Utility functions
├── favicon.ico
└── package.json


---

## 🚀 Features

### Backend (Go)
- RESTful API built with **Golang**
- **PostgreSQL** database connection
- MVC architecture: Controllers, Models, Routes
- CORS-ready for frontend communication
- Easy to extend and maintain

### Frontend (Next.js + TypeScript)
- Modern **Next.js App Router** structure
- Type-safe components using **TypeScript**
- Modular components (`FilmCard`, `FilmForm`, etc.)
- Responsive and minimal UI
- Integration with Go backend via fetch API

---

## ⚙️ Tech Stack

| Layer       | Technology        |
|--------------|-------------------|
| Frontend     | Next.js (TypeScript) |
| Backend      | Go (Golang) |
| Database     | PostgreSQL |
| API Protocol | REST |
| Styling      | CSS / Tailwind (optional) |

---

## 🧠 Setup & Installation

### 1️⃣ Clone this repository
```bash
git clone https://github.com/ArifRosandika/Project_CRUD_Go.git
cd Project_CRUD_Go

2️⃣ Backend setup (Go)

cd backend
go mod tidy
go run main.go

By default, the API should run at:

http://localhost:8080

3️⃣ Frontend setup (Next.js)

cd frontend
npm install
npm run dev

The frontend will be available at:

http://localhost:3000

4️⃣ Environment Variables (Example)

Create a .env file in both folders if needed.

backend/.env

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=filmdb

frontend/.env.local

NEXT_PUBLIC_API_URL=http://localhost:8080

🧩 API Example

POST /films

Create Films

{
  "name": "Gladiator II",
  "picture": "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
  "showtime": "2025-10-11 16:30", 
  "description": "Good Movie"
}

📜 License

This project is open-source and available under the MIT License

.
👨‍💻 Author

Arif Rosandika

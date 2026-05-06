# MERN Hacker News Scraper App

A full-stack MERN application that scrapes the top stories from Hacker News, stores them in MongoDB, and allows authenticated users to bookmark stories.

---

# Live Demo

## Frontend
https://mern-scraping-4f6ahop5u-abhishek189153s-projects.vercel.app

## Backend
https://mern-scrapingapp-backend.onrender.com

---

# Features

## Web Scraper
- Scrapes top 10 stories from Hacker News
- Stores stories in MongoDB
- Runs automatically on server startup
- Can also be triggered manually via API

## Authentication
- User Registration
- User Login
- JWT-based Authentication

## Stories
- Fetch all stories
- Fetch single story
- Stories sorted by points
- Bookmark functionality

## Bookmarks
- Add bookmark
- Remove bookmark
- Protected bookmarks page

## Frontend
- React + Vite
- Context API for authentication
- Responsive UI with Tailwind CSS
- Modern and interactive design

---

# Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cheerio
- Axios

---

# Project Structure

```bash
mern-ScrapingApp/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── scraper/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

# Environment Variables

## Backend (.env)

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Frontend (.env)

Create a `.env` file inside the frontend folder:

```env
VITE_API_URL=http://localhost:5000/api
```

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/Abhishek189153/mern-ScrapingApp.git
```

---

# Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Authentication

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Scraper

### Trigger Scraper

```http
POST /api/scrape
```

---

## Stories

### Get All Stories

```http
GET /api/stories
```

### Get Single Story

```http
GET /api/stories/:id
```

### Toggle Bookmark

```http
POST /api/stories/:id/bookmark
```

---

## User

### Get Bookmarked Stories

```http
GET /api/users/bookmarks
```

---

# Deployment

## Frontend
- Vercel

## Backend
- Render

## Database
- MongoDB Atlas

---

# Future Improvements

- Pagination UI
- Search functionality
- Bookmark indicator
- Refresh scraper button
- Better error handling
- Story filtering

---

# Author

Abhishek Pant
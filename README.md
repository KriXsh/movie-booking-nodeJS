## Movie Booking Site
This is a Node.js application for a movie booking site. Users can register, authenticate, book movies, and get details of the movies and their bookings. Admins can add movies and manage the site.

## Features
User registration and login
Admin registration and login
Book movies
Get user bookings
Add movies (Admin only) 
Get movie details  
Prerequisites
Node.js (version 16 or later)
MongoDB
Docker (optional, for containerized deployment)


# Installation
# clone this repo 
git clone https://github.com/yourusername/movie-booking-site.git
cd movie-booking-site


# env
MONGODB_URI=mongodb://username:password@host:port/database
JWT_SECRET=your_jwt_secret

# Start the application:
npm start

# API Endpoints
Auth
Register:

POST /api/auth/register
Request Body:

{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password"
}

# Login:

POST /api/auth/login
Request Body:
{
  "email": "user@example.com",
  "password": "password"
}

# Admin
Register:

POST /api/admin/register
Request Body:
{
  "name": "Admin Name",
  "email": "admin@example.com",
  "password": "password"
}

Login:
POST /api/admin/login
Request Body:
{
  "email": "admin@example.com",
  "password": "password"
}
Movies
Add Movie (Admin Only):

POST /api/movies/add
Request Body:
{
  "title": "Movie Title",
  "description": "Movie Description",
  "duration": 120,
  "releaseDate": "2024-07-04"
}

# Requires Authorization header with Admin JWT token
Get All Movies:

GET /api/movies/
Get Movie By ID:
GET /api/movies/:id
Bookings
Book Movie:

POST /api/bookings/book
Request Body:
{
  "movieId": "movieId",
  "seatNumber": "A1"
}
Requires Authorization header with User JWT token
Get User Bookings:

GET /api/bookings/user
Requires Authorization header with User JWT token

# file sructure 
movie-booking-site/
│
├── controllers/
│   ├── authController.js
│   ├── adminController.js
│   ├── movieController.js
│   └── bookingController.js
│
├── middlewares/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Admin.js
│   ├── Movie.js
│   └── Booking.js
│
├── routes/
│   ├── auth.js
│   ├── admin.js
│   ├── movies.js
│   └── bookings.js
│
├── .env
├── .gitignore
├── Dockerfile
├── package.json
├── app.js
└── README.md

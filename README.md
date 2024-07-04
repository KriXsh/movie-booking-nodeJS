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

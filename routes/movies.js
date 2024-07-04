const express = require('express');
const router = express.Router();
const { addMovie, getMovies, getMovieById } = require('../controllers/movieController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

router.post('/add', authMiddleware, adminMiddleware, addMovie);
router.get('/', authMiddleware, getMovies);
router.get('/:id', authMiddleware, getMovieById);

module.exports = router;

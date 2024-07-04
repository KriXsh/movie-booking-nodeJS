const express = require('express');
const router = express.Router();
const { bookMovie, getUserBookings } = require('../controllers/bookingController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/book', authMiddleware, bookMovie);
router.get('/user', authMiddleware, getUserBookings);

module.exports = router;

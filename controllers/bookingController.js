const Booking = require('../models/booking');
const Movie = require('../models/movie');
const User = require('../models/user');

exports.bookMovie = async (req, res) => {
  const { movieId, seatNumber } = req.body;
  const userId = req.user.id;
  try {
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    const booking = new Booking({ user: userId, movie: movieId, seatNumber });
    await booking.save();
    res.status(200).json({ code:200, message: 'Movie booked successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserBookings = async (req, res) => {
  const userId = req.user.id;
  try {
    const bookings = await Booking.find({ user: userId }).populate('movie');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  duration: { type: Number, required: true },
  releaseDate: { type: Date, required: true },
});

module.exports = mongoose.model('Movie', MovieSchema);

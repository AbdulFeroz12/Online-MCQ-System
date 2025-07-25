const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  question_id: {
    type: String, // ✅ Use String since you're using IDs like "Q101"
    required: true,
  },
  selected_option: {
    type: Number,
    required: true,
  },
  is_correct: {
    type: Boolean,
    default: false,
  },
});

const resultSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  exam_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  answers: [answerSchema],
});

module.exports = mongoose.model('Result', resultSchema);

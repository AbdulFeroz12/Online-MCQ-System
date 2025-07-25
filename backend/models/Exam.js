const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(), // ✅ Generate custom ID
    required: true,
    unique: true
  },
  question_text: String,
  options: [String],
  correct_option: Number
});

const examSchema = new mongoose.Schema({
  title: String,
  description: String,
  questions: [questionSchema]
});

module.exports = mongoose.model('Exam', examSchema);

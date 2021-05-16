const { Schema, model } = require("mongoose");

const QuizSchema = new Schema({
  question: String,
  answers: [String],
  correct_answer: String,
});

module.exports = model("Quiz", QuizSchema);

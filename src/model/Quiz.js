const { Schema, model } = require("mongoose");

const QuizSchema = new Schema({
  _id: { type: String },
  question: String,
  answers: [String],
  correct_answer: String,
});

module.exports = model("Quiz", QuizSchema);

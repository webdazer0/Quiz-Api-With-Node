import mongoose from "mongoose";
const { model, Schema } = mongoose;

const QUIZ_COLLECTION_NAME = "Quiz";

const QuizSchema = new Schema({
  _id: { type: String },
  question: String,
  answers: [String],
  correct_answer: String,
});

export default model(QUIZ_COLLECTION_NAME, QuizSchema);

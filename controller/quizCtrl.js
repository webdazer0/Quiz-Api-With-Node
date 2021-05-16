const Quiz = require("../model/Quiz");
const path = require("path");

const getAll = (req, res) => {
  Quiz.find()
    .then((allQuiz) => res.json(allQuiz))
    .catch((err) => res.status(400).json("Error: " + err));
};

const create = async (req, res) => {
  const { question, answers, correct_answer } = req.body;
  const newQuiz = new Quiz({ question, answers, correct_answer });
  console.log(newQuiz);
  await newQuiz.save();
  res.json({ message: "Question X Saved" });
};

const deleteById = async (req, res) => {
  const quiz = await Quiz.findByIdAndDelete(req.params.id);
  res.json({ message: "Question Deleted" });
};

module.exports = { getAll, create, deleteById };

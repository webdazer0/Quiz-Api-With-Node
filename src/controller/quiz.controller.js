const Quiz = require("../model/Quiz");

const getAll = async (req, res) => {
  try {
    const allQuiz = await Quiz.find();
    return res.status(200).json(allQuiz);
  } catch (err) {
    res.status(400).json("Error: " + err.message);
  }
};

const create = async (req, res) => {
  try {
    const { question, answers, correct_answer } = req.body;
    const newQuiz = new Quiz({ question, answers, correct_answer });
    console.log(newQuiz);
    await newQuiz.save();
    return res.status(200).json({ message: "Question X Saved" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("id => ", id);

    const quiz = await Quiz.findById(id);
    console.log("quiz => ", quiz);
    return res.status(200).json(quiz);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const updateById = async (req, res) => {
  try {
    const { question, correct_answer } = req.body;

    const payload = {
      question,
      correct_answer,
    };

    const quiz = await Quiz.findByIdAndUpdate(req.params.id, payload);
    // console.log(quiz);
    // findByIdAndUpdate ci ritornerà l'anteriore oggetto, si puo modificarlo e settarlo per ricevero quello nuovo/modified
    return res.status(200).json({ message: "Question X Updated" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const deleteById = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Question Deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { getAll, create, getById, updateById, deleteById };

const { Router } = require("express");
const router = Router();
const path = require("path");
const Quiz = require("../model/Quiz");

router
  .route("/")
  .get((req, res) => {
    Quiz.find()
      .then((allQuiz) => res.json(allQuiz))
      .catch((err) => res.status(400).json("Error: " + err));
  })
  .post(async (req, res) => {
    const { question, answers, correct_answer } = req.body;
    const newQuiz = new Quiz({ question, answers, correct_answer });
    console.log(newQuiz);
    await newQuiz.save();
    res.json({ message: "Question X Saved" });
  });

router.route("/:id").delete(async (req, res) => {
  const quiz = await Quiz.findByIdAndDelete(req.params.id);
  res.json({ message: "Question Deleted" });
});

module.exports = router;

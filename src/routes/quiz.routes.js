const { Router } = require("express");
const router = Router();
const quizController = require("../controller/quiz.controller");

const myRoute = "/quiz";

router
  .route(`${myRoute}`)
  .get(quizController.getAll)
  .post(quizController.create);

router
  .route(`${myRoute}/:id`)
  .get(quizController.getById)
  .put(quizController.updateById)
  .delete(quizController.deleteById);

module.exports = router;

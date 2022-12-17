import { Router } from "express";
import quizController from "../controller/quiz.controller.js";

const router = Router();
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

export default router;

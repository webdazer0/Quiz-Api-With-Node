const { Router } = require("express");
const router = Router();

const quizCtrl = require("../controller/quizCtrl");

router.get("/", quizCtrl.getAll);
router.post("/", quizCtrl.create);

router
  .route("/:id")
  .get(quizCtrl.getById)
  .put(quizCtrl.updateById)
  .delete(quizCtrl.deleteById);

module.exports = router;

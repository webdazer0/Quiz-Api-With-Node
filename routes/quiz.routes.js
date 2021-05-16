const { Router } = require("express");
const router = Router();

const quizCtrl = require("../controller/quizCtrl");

router.route("/").get(quizCtrl.getAll).post(quizCtrl.create);

router.route("/:id").delete(quizCtrl.deleteById);

module.exports = router;

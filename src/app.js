const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config");
const quizRoutes = require("./routes/quiz.routes");

// Initialize
const app = express();
require("./db");

// Settings
app.set("port", config.PORT);

// Middlewares
app.use(morgan("dev"));
app.use(cors("*"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", [quizRoutes]);

module.exports = app;

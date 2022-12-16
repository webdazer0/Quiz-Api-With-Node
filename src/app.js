const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config");
const quizRoute = require("./routes/quiz.routes");
const homeRoute = require("./routes/home.routes");

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
app.use("/", [homeRoute]);
app.use("/api", [quizRoute]);

module.exports = app;

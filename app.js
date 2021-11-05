const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Init
const app = express();
require("./db");

// Settings
app.set("port", process.env.PORT || 4500);

// Middlewares
app.use(morgan("dev"));
app.use(cors("*"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/api/quiz", require("./routes/quiz.routes"));

module.exports = app;

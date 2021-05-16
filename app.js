const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

require("./db");

// Middlewares
app.use(morgan("dev"));
app.use(cors("*"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/api/quiz", require("./routes/quiz.routes"));

module.exports = app;

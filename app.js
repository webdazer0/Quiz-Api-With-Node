const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

require("./db");
app.listen(5000, () => {
  console.log("Server on port :", 5000);
});

// Middlewares
app.use(morgan("dev"));
app.use(cors("*"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/api/quiz", require("./routes"));

import express from "express";
import config from "./config.js";
import morgan from "morgan";
import cors from "cors";
import quizRoute from "./routes/quiz.routes.js";
import homeRoute from "./routes/home.routes.js";

// Initialize
const app = express();
import "./db.js";

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

// module.exports = app;
export default app;

import mongoose from "mongoose";
import config from "./config.js";

const optionsDB = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

// IIFE (Immediately Invoked Function Expression) to use Async/Await
(async () => {
  try {
    await mongoose.connect(config.MONGODB_URI, optionsDB);
    console.log(`DB is connected`);
  } catch (err) {
    console.error(err);
  }
})();

const mongoose = require("mongoose");

// const URI_DB = "mongodb://localhost/db_quiz";

const optionsDB = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

// IIFE (Immediately Invoked Function Expression) to use Async/Await
(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, optionsDB);
    console.log(`DB is connected`);
  } catch (err) {
    console.error(err);
  }
})();

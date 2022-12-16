const mongoose = require("mongoose");
const config = require("./config");

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

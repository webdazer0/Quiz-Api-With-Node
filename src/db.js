const mongoose = require("mongoose");
const Config = require("./config");

const optionsDB = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

// IIFE (Immediately Invoked Function Expression) to use Async/Await
(async () => {
  try {
    await mongoose.connect(Config.MONGODB_URI, optionsDB);
    console.log(`DB is connected`);
  } catch (err) {
    console.error(err);
  }
})();

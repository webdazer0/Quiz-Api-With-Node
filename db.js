const mongoose = require("mongoose");

const URI_DB = "mongodb://localhost/db_quiz";

mongoose
  .connect(URI_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log(`DB is connected`))
  .catch((err) => console.error(err));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = require("./app");

app.listen(4500, () => {
  console.log("Server on port :", 4500);
  console.log("Environment:", process.env.NODE_ENV);
});

import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const config = {
  PORT: process.env.PORT || 4500,
  MONGODB_URI: process.env.MONGODB_URI,
};

export default config;

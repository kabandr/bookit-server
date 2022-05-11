import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const port = process.env.SERVER_PORT;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  connect();
  console.log(`Server listening at http://localhost:${port}`);
});

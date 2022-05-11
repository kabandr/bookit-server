import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

const port = process.env.SERVER_PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

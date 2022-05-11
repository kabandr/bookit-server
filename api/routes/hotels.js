import express from "express";

const router = express.Router();

app.get("/", (req, res) => {
  res.send("Hotels endpoint!");
});

export default router;

import express from "express";

const router = express.Router();

app.get("/", (req, res) => {
  res.send("Users endpoint!");
});

export default router;

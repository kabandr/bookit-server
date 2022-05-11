import express from "express";

const router = express.Router();

app.get("/", (req, res) => {
  res.send("Rooms endpoint!");
});

export default router;

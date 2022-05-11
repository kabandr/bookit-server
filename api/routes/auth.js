import express from "express";

const router = express.Router();

app.get("/", (req, res) => {
  res.send("Auth endpoint!");
});

export default router;

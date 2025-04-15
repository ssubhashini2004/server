const express = require("express");
const router = express.Router();
const Journal = require("../models/journalModel.cjs");

router.post("/add", async (req, res) => {
  const { userId, content } = req.body;
  try {
    const newEntry = new Journal({ userId, content });
    await newEntry.save();
    res.status(200).json({ message: "Journal entry saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save entry" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const entries = await Journal.find({ userId: req.params.userId });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch entries" });
  }
});

module.exports = router;

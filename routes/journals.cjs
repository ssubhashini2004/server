const express = require("express");
const router = express.Router();
const Journal = require("../models/Journal.cjs");

// Add a journal entry
router.post("/add", async (req, res) => {
  try {
    const { userId, content } = req.body;

    if (!userId || !content) {
      return res.status(400).json({ error: "Missing userId or content" });
    }

    const newJournal = new Journal({ userId, content });
    await newJournal.save();

    res
      .status(201)
      .json({ message: "Journal added successfully", journal: newJournal });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add journal" });
  }
});

// Fetch all entries by user
router.get("/:userId", async (req, res) => {
  try {
    const journals = await Journal.find({ userId: req.params.userId }).sort({
      createdAt: -1,
    });
    if (!journals || journals.length === 0) {
      return res.status(404).json({ message: "No journals found." });
    }
    res.json(journals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not fetch journals" });
  }
});

// Delete an entry by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedEntry = await Journal.findByIdAndDelete(req.params.id);
    if (!deletedEntry) {
      return res.status(404).json({ error: "Entry not found" });
    }
    res.json({ message: "Journal entry deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete journal entry" });
  }
});

// Update an entry by ID
router.put("/:id", async (req, res) => {
  const { content } = req.body;
  try {
    const updatedEntry = await Journal.findByIdAndUpdate(
      req.params.id,
      { content },
      { new: true }
    );
    if (!updatedEntry) {
      return res.status(404).json({ error: "Entry not found" });
    }
    res.json({
      message: "Journal entry updated successfully",
      journal: updatedEntry,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update journal entry" });
  }
});

module.exports = router;

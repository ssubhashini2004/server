const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, // Changed from 'timestamp' to 'createdAt'
});

module.exports = mongoose.model("Journal", journalSchema);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth.cjs");
const journalRoutes = require("./routes/journals.cjs");

const app = express();
app.use(cors());
app.use(express.json());

// Basic root route to test if the backend is running
app.get("/", (req, res) => {
  res.send("API is running"); // You can change this message as needed
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Route setup
app.use("/api/auth", authRoutes);
app.use("/api/journals", journalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

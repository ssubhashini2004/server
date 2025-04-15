const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth.cjs");

const journalRoutes = require("./routes/journals.cjs");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Route setup
app.use("/api/auth", authRoutes);
app.use("/api/journals", journalRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

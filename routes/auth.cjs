// routes/auth.cjs
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User.cjs");
const router = express.Router();

// Register route
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Validation for input
  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully!", userId: newUser._id });
  } catch (error) {
    console.error("Error during registration:", error); // Log the error for debugging
    res
      .status(500)
      .json({ error: "Registration failed", details: error.message }); // Return detailed error
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Validation for email and password
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Check if the password matches the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Successful login
    res.status(200).json({ message: "Login successful", userId: user._id });
  } catch (error) {
    console.error("Error during login:", error); // Log the error for debugging
    res.status(500).json({ error: "Login failed", details: error.message }); // Return detailed error
  }
});

module.exports = router;

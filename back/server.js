const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const timerRoutes = require("./routes/timerRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true,}).then(() =>{
  console.log("Connected to MongoDB")
}).catch((error) =>{
  console.error("Error connecting to MongoDB:", error)
});

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/timer", timerRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
const express = require("express");
const router = express.Router();
const timerController = require("../controllers/timerController");

// Ensure authentication before accessing these routes
const { authenticate } = require("../middleware/authMiddleware");

router.post(
  "/submit-reaction-time",
  authenticate,
  timerController.submitReactionTime
);
router.get(
  "/get-reaction-times/:userId",
  authenticate,
  timerController.getReactionTimes
);

module.exports = router;

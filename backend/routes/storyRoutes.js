const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getStories,
  getSingleStory,
  toggleBookmark,
} = require("../controllers/storyController");


router.get("/", getStories);

router.get("/:id", getSingleStory);

router.post("/:id/bookmark", protect, toggleBookmark);

module.exports = router;
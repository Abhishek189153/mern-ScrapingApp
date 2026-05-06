const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const { getBookmarks } = require("../controllers/userController");


router.get("/bookmarks", protect, getBookmarks);

module.exports = router;
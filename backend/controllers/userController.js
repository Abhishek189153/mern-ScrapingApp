const User = require("../models/User");


const getBookmarks = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("bookmarks");

    res.status(200).json(user.bookmarks);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch bookmarks",
    });
  }
};

module.exports = {
  getBookmarks,
};
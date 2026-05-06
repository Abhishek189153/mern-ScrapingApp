const Story = require("../models/Story");
const User = require("../models/User");


const getStories = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const stories = await Story.find()
      .sort({ points: -1 })
      .skip(skip)
      .limit(limit);

    const totalStories = await Story.countDocuments();

    res.status(200).json({
      stories,
      currentPage: page,
      totalPages: Math.ceil(totalStories / limit),
      totalStories,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch stories",
    });
  }
};


const getSingleStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);

    if (!story) {
      return res.status(404).json({
        message: "Story not found",
      });
    }

    res.status(200).json(story);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch story",
    });
  }
};


const toggleBookmark = async (req, res) => {
  try {
    const storyId = req.params.id;

    const user = await User.findById(req.user._id);

    const alreadyBookmarked = user.bookmarks.includes(storyId);

    if (alreadyBookmarked) {
      user.bookmarks = user.bookmarks.filter(
        (id) => id.toString() !== storyId
      );

      await user.save();

      return res.status(200).json({
        message: "Bookmark removed",
      });
    }

    user.bookmarks.push(storyId);

    await user.save();

    res.status(200).json({
      message: "Story bookmarked",
    });
  } catch (error) {
    res.status(500).json({
      message: "Bookmark failed",
    });
  }
};

module.exports = {
  getStories,
  getSingleStory,
  toggleBookmark,
};
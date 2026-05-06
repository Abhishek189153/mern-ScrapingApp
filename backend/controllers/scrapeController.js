const scrapeHackerNews = require("../scraper/hackerNewsScraper");

const runScraper = async (req, res) => {
  try {
    await scrapeHackerNews();

    res.status(200).json({
      message: "Scraping completed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Scraping failed",
    });
  }
};

module.exports = {
  runScraper,
};
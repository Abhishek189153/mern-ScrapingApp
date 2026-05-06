const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const scrapeRoutes = require("./routes/scrapeRoutes");
const authRoutes = require("./routes/authRoutes");
const storyRoutes = require("./routes/storyRoutes");
const userRoutes = require("./routes/userRoutes");
const scrapeHackerNews = require("./scraper/hackerNewsScraper");

dotenv.config();

connectDB().then(async () => {
  await scrapeHackerNews();
});

const app = express();


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/scrape", scrapeRoutes);
app.use("/api/stories", storyRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
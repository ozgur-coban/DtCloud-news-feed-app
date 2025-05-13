const express = require("express");
const axios = require("axios");
const router = express.Router();

const NEWS_API_KEY = process.env.NEWS_API_KEY; // Securely stored in .env
const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";

// Handle requests to /news endpoint
router.get("/", async (req, res) => {
  const { category = "general" } = req.query; // Default to 'general' category if not specified

  try {
    // Make request to external news API (NewsAPI.org)
    const response = await axios.get(NEWS_API_URL, {
      params: {
        category,
        apiKey: NEWS_API_KEY, // Send API key in the request
      },
    });

    // Send back the news data from the API
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

module.exports = router;

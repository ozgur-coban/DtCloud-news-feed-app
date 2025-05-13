const express = require("express");
const axios = require("axios");
const router = express.Router();

// Load environment variables
require("dotenv").config();

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";

// Handle requests to /news endpoint
router.get("/", async (req, res) => {
  let { categories } = req.query;

  // Use "general" as the default category if none provided
  if (!categories || categories.trim() === "") {
    categories = "general";
  }

  const categoryList = categories.split(",").map((category) => category.trim());

  try {
    // Prepare all API calls for selected categories
    const newsPromises = categoryList.map((category) =>
      axios.get(NEWS_API_URL, {
        params: {
          category,
          apiKey: NEWS_API_KEY,
          country: "us", // or change to "tr" if needed
        },
      })
    );

    // Await all requests
    const responses = await Promise.all(newsPromises);
    const allArticles = responses.flatMap((response) => response.data.articles);

    res.json({ articles: allArticles });
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

module.exports = router;

import React, { useState, useEffect } from "react";
import axios from "axios";
import CategorySelector from "./CategorySelector"; // Import CategorySelector

const News = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]); // Tracks selected categories
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Function to fetch news based on selected categories
  const fetchNews = async (selectedCategories) => {
    setLoading(true);
    try {
      const query = selectedCategories.join(","); // Convert selected categories to query string
      const response = await axios.get("http://localhost:5000/news", {
        params: { categories: query }, // Send selected categories as a query parameter
      });
      setArticles(response.data.articles);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch news");
      setLoading(false);
    }
  };

  // Fetch news whenever categories change
  useEffect(() => {
    if (categories.length > 0) {
      fetchNews(categories); // Trigger news fetch based on selected categories
    }
  }, [categories]); // Dependency on categories state

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>News Feed</h1>
      <CategorySelector onCategoryChange={setCategories} />{" "}
      {/* Pass function to update categories */}
      <div>
        {articles.map((article, index) => (
          <div key={index} className="article">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

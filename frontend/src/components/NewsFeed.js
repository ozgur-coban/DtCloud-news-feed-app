import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/NewsFeed.css";
import CategorySelector from "./CategorySelector";

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState(() => {
    // Try to load the saved preferences from localStorage, default to "general" if none
    const savedCategories = localStorage.getItem("selectedCategories");
    return savedCategories ? JSON.parse(savedCategories) : ["general"];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchNews = async (selectedCategories) => {
    setLoading(true);
    try {
      const query = selectedCategories.join(","); // Convert selected categories to query string
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/newsFeed`,
        {
          params: { categories: query },
        }
      );
      setArticles(response.data.articles);
      console.log(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch news");
      setLoading(false);
    }
  };

  // Fetch news whenever categories change
  useEffect(() => {
    fetchNews(categories);

    // Save the selected categories in localStorage
    localStorage.setItem("selectedCategories", JSON.stringify(categories));
  }, [categories]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="news-feed-container">
      <h1>News Feed</h1>
      <CategorySelector
        selectedCategories={categories}
        onCategoryChange={setCategories}
      />
      <div className="news-list">
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="news-card-image"
              />
            )}
            <h4>{article.title}</h4>
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

export default NewsFeed;

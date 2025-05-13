import axios from "axios";
import { useEffect, useState } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/news", {
          params: { category },
        });
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch news");
        setLoading(false);
      }
    };
    fetchNews();
  }, [category]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h1>News - {category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="general">General</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
        <option value="business">Business</option>
      </select>
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

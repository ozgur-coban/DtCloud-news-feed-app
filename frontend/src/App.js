// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import AuthPage from "./components/AuthPage";
import NewsFeed from "./components/NewsFeed";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token on load
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // convert to true/false
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div className="app-wrapper">
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <NewsFeed />
        </>
      ) : (
        <AuthPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;

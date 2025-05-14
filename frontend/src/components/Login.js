import React, { useState } from "react";
import axios from "axios";

const Login = ({ onLogin, switchToRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });
      console.log("Logged in:", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.username);
      onLogin?.(); // callback to switch to NewsFeed or set isLoggedIn
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don’t have an account?{" "}
        <button onClick={switchToRegister}>Register here</button>
      </p>
    </div>
  );
};

export default Login;

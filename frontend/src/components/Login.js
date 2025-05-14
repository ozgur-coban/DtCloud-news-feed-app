import React, { useState } from "react";
import axios from "axios";
import "../styles/AuthForm.css";

const Login = ({ onLogin, switchToRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
        {
          username,
          password,
        }
      );

      console.log("Logged in:", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.username);
      onLogin?.();
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed");
    }
  };

  return (
    <div className="auth-form">
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
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Don’t have an account?{" "}
        <span
          onClick={switchToRegister}
          style={{ color: "#007bff", cursor: "pointer" }}
        >
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;

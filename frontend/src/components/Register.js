import React, { useState } from "react";
import axios from "axios";
import "../styles/AuthForm.css";
import { BACKEND_URL } from "../config";

const Register = ({ onSuccess, switchToLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    if (!isValidEmail(username)) {
      alert("Please enter a valid email address.");
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/auth/register`, {
        username,
        password,
      });

      console.log("Registered:", response.data);
      alert("Registration successful!");
      onSuccess?.();
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
      alert("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="e.g. johndoe@example.com"
        value={username}
        disabled={loading}
        onChange={(e) => setUsername(e.target.value)}
      />
      <small style={{ color: "#888", fontSize: "12px" }}>
        Example: johndoe@example.com
      </small>
      <input
        type="password"
        placeholder="Password"
        value={password}
        disabled={loading}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister} disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Already have an account?{" "}
        <span
          onClick={switchToLogin}
          style={{ color: "#007bff", cursor: "pointer" }}
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;

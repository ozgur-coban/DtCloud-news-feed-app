import React, { useState } from "react";
import axios from "axios";
import "../styles/AuthForm.css";

const Register = ({ onSuccess, switchToLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/register", {
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
    }
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
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

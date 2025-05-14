import React, { useState } from "react";
import "../styles/AuthForm.css";
import Login from "./Login";
import Register from "./Register";

const AuthPage = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);

  return isRegistering ? (
    <Register
      onSuccess={() => setIsRegistering(false)}
      switchToLogin={() => setIsRegistering(false)}
    />
  ) : (
    <Login onLogin={onLogin} switchToRegister={() => setIsRegistering(true)} />
  );
};

export default AuthPage;

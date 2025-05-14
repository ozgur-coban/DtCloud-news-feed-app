import React from "react";
import AuthPage from "./components/AuthPage";

const AuthTestWrapper = () => {
  return (
    <div>
      <h1>Auth Component Test</h1>
      <AuthPage onLogin={() => alert("Logged in successfully")} />
    </div>
  );
};

export default AuthTestWrapper;

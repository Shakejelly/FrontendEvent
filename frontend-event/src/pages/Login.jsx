import React, { useState } from "react";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState("login");

  const apiBaseURL = "https://localhost:7261/api/Auth/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(`${apiBaseURL}login`, {
        userName: username,
        password: password,
      });
      localStorage.setItem("token", response.data);
      alert("Login successful");
    } catch (error) {
      setError("Invalid username or password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${apiBaseURL}google-login`;
  };

  const handleRegisterView = () => setView("register");
  const handleForgotPasswordView = () => setView("forgotPassword");

  return (
    <div>
      {view === "login" && (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          {error && <p>{error}</p>}
          <button onClick={handleRegisterView}>Register</button>
          <button onClick={handleForgotPasswordView}>Forgot Password</button>
          <button onClick={handleGoogleLogin}>Login with Google</button>
        </form>
      )}

      {view === "register" && <Register />}
      {view === "forgotPassword" && <ForgotPassword />}
    </div>
  );
};

export default Login;

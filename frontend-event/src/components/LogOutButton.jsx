import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <button onClick={handleLogout} className="logout-button">
      Logga ut
    </button>
  );
};

export default LogOutButton;

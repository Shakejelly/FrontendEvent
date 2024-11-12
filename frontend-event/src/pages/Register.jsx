import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const apiBaseURL = "https://localhost:7261/api/Auth/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(`${apiBaseURL}register`, {
        userName: username,
        email: email,
        password: password,
        confirmPassword: confirmpassword,
      });
      alert(response.data);
    } catch (error) {
      setError("Registration failed. Email or username might be taken.");
    } finally {
      setIsLoading(false);
    }
  };
};

return(
)

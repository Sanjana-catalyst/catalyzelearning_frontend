import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import api from '../api';

// Create a Context for the login state
const LoginContext = createContext();

// Create a custom hook to use the LoginContext
export const useLogin = () => {
  return useContext(LoginContext);
};

// Create a provider component
export const LoginProvider = ({ children }) => {
  // States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Login Function
  const login = async (username, password) => {
    try {
      const response = await axios.post(api.auth.login, { username, password });
      if (response.status === 200) {
        // Redirect to another page if login is successful
        setIsLoggedIn(true);
        localStorage.setItem('token', response.data.token);
        navigate("/Dashboard"); // Replace "/dashboard" with the desired route
      } else {
        // Set error message if login fails
        setError("Invalid username or password. Please try again.");
      }
    } catch (error) {
      // Handle other errors (e.g., network issues)
      setError("An error occurred. Please try again later.");
    }
  };

  // Function to handle logout
  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
    // You can add more logout logic here, such as clearing tokens or user data
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout, error }}>
      {children}
    </LoginContext.Provider>
  );
};

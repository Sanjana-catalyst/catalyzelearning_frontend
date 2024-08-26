import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('token'); // Assuming token is stored in localStorage
  return isLoggedIn ? children : <Navigate to="/RedirectLogin" />;
};

export default PrivateRoute;

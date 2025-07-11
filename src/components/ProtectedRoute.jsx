// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // custom hook to get Firebase user

const ProtectedRoute = ({ children }) => {
  const user = useAuth(); // this tracks the logged-in user (null if not logged in)

  if (!user) return <Navigate to="/login" />; // block access if not logged in

  return children; // allow access if user exists
};

export default ProtectedRoute;

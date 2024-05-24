import React from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { userId: urlUserId } = useParams();
  const { userId: authUserId } = useAuth();

  // Check if the user is authorized
  const isAuthorized = urlUserId === authUserId;

  if (!isAuthorized) {
    // Redirect to bad route if unauthorized
    return <Navigate to="/badroute" />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.user);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const decodedToken = parseJwt(token);
  const isAdmin = decodedToken.role === 'admin';

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;

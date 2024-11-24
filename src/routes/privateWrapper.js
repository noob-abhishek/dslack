import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateWrapper = () => {
  const user = JSON.parse(localStorage.getItem('user')); 

  return user ?  <div> <Outlet /> </div> : <Navigate to="/" replace />;
};

export default PrivateWrapper;

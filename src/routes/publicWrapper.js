import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicWrapper = () => {
  const user = JSON.parse(localStorage.getItem('user')); 

  return user ? <Navigate to="/dashboard" replace /> : <div> <Outlet /></div> ;
};

export default PublicWrapper;

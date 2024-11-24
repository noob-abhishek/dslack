import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateWrapper from './routes/privateWrapper';
import PublicWrapper from './routes/publicWrapper';
import routes from './routes/routeConfig';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />

      <Router>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicWrapper />}>
            {routes
              .filter((route) => route.type === 'public')
              .map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
          </Route>

          {/* Protected Routes - After login routes */}
          <Route element={<PrivateWrapper />}>
            {routes
              .filter((route) => route.type === 'protected')
              .map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
          </Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

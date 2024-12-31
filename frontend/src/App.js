import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import AlreadyLoggedIn from './components/AlreadyLoggedIn';

const App = () => {
  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <AlreadyLoggedIn>
            <LoginPage />
          </AlreadyLoggedIn>
          } 
        />
        <Route path="/signup" element={
          <AlreadyLoggedIn>
            <SignupPage />
          </AlreadyLoggedIn>
          } 
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

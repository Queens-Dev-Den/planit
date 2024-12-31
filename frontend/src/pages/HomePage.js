import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
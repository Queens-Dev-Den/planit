import React from 'react';
import '../styles/HomePage.css';
import ListedEvent from '../components/homepage/ListedEvent';
import OpenEvent from '../components/homepage/OpenEvent';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className='homepage-content'>
        <div className='listed-events'>
          <ListedEvent />
          <ListedEvent />
          <ListedEvent /> 
          <ListedEvent />
          <ListedEvent />
          <ListedEvent />
        </div>
        <OpenEvent />
      </div>
    </div>
  );
};

export default HomePage;
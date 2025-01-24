import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import ListedEvent from '../components/homepage/ListedEvent';
import OpenEvent from '../components/homepage/OpenEvent';

// REMOVE IN FUTURE, used to test with dummy data
import events from '../dummy-data/events.json';

const HomePage = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  useEffect(() => {
    setSelectedEvent(events[0]);
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div>
      <h1 className='homepage-message'>Upcoming Events</h1>
      <div className='homepage-content'>
        <div className='listed-events'>
          {events.map(event => (
              <ListedEvent 
                key={event.id} 
                event={event} 
                onClick={() => handleEventClick(event)}
                selected={event.id === selectedEvent.id}
              />
          ))}    
        </div>
        <OpenEvent event={selectedEvent}/>
      </div>
    </div>
  );
};

export default HomePage;
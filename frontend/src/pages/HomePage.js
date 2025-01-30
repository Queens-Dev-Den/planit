import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/HomePage.css';
import ListedEvent from '../components/homepage/ListedEvent';
import OpenEvent from '../components/homepage/OpenEvent';

import events from '../dummy-data/events.json';

const HomePage = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const navigate = useNavigate();
  const location = useLocation();
  const eventRefs = useRef([]);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const eventId = params.get('eventId');
    if (eventId) {
      const event = events.find(e => e.id === parseInt(eventId));
      if (event) {
        setSelectedEvent(event);
        const eventIndex = events.findIndex(e => e.id === parseInt(eventId));
        if (eventRefs.current[eventIndex]) {
          eventRefs.current[eventIndex].scrollIntoView({
            behavior: isInitialLoad.current ? 'auto' : 'smooth',
            block: 'center'
          });
        }
      }
    } else {
      setSelectedEvent(events[0]);
    }
    isInitialLoad.current = false;
  }, [location.search]);

  const handleEventClick = (event, index) => {
    setSelectedEvent(event);
    navigate(`/?eventId=${event.id}`);
    if (eventRefs.current[index]) {
      eventRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div>
      <h1 className='homepage-message'>Upcoming Events</h1>
      <div className='homepage-content'>
        <div className='listed-events'>
          {events.map((event, index) => (
            <ListedEvent
              key={event.id}
              event={event}
              onClick={() => handleEventClick(event, index)}
              selected={event.id === selectedEvent.id}
              ref={el => eventRefs.current[index] = el}
            />
          ))}
        </div>
        <OpenEvent event={selectedEvent} />
      </div>
    </div>
  );
};

export default HomePage;
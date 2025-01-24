import './ListedEvent.css';
import React from 'react';

export default function ListedEvent({ event, onClick, selected }) {
    return (
      <div className={`listed-event ${selected ? 'selected-event' : ''}`} onClick={onClick}>
          <p>{event.title}</p>
          <p>{event.date} at {event.time}</p>
      </div>
    );
  }
  
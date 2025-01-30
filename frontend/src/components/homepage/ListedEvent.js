import './ListedEvent.css';
import React, { forwardRef } from 'react';

const ListedEvent = forwardRef(({ event, onClick, selected }, ref) => {
    const formatDate = (dateString) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div ref={ref} className={`listed-event ${selected ? 'selected-event' : ''}`} onClick={onClick}>
            <p className='event-title listed-event-item'>{event.title}</p>
            <div className='listed-event-item'>
                <p className='event-item-key'>Location: </p>
                <p className='event-location'>{event.location}</p>
            </div>
            <div className='listed-event-item'>
                <p className='event-item-key'>Time: </p>
                <p className='event-time'>{formatDate(event.date)} at {event.time}</p>
            </div>
            <div className='listed-event-item'>
                <p className='event-item-key'>Event Planner: </p>
                <p className='event-organizer'>{event.organizer}</p>
            </div>
        </div>
    );
});

export default ListedEvent;
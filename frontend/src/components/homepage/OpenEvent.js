import './OpenEvent.css';

export default function OpenEvent({ event }) {
    return (
      <div className="open-event">
          <p className='open-event-title'>{event.title}</p> 
          <p className='open-event-date'>{event.date}</p>
          <p className='open-event-description'>{event.description}</p>
      </div>
    );
  }
  
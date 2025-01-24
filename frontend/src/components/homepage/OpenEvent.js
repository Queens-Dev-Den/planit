import './OpenEvent.css';

export default function OpenEvent({ event }) {
    return (
      <div className="open-event">
          <p>{event.title}</p> 
          <p>{event.date}</p>
          <p>{event.description}</p>
      </div>
    );
  }
  
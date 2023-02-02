import React from 'react'
import {useState, useEffect} from 'react'

const Event = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
      fetch("/events")
        .then((r) => r.json())
        .then((data) => setEvents(data));
    }, []);

  const handleDelete = (eventId) => {
    fetch(`/events/${eventId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setEvents(events.filter((event) => event.id !== eventId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  
  const toggleGoalCompletion = async (event) => {
    const updatedEvent = {...event, completed: !event.completed};
    await fetch(`/goals/${event.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify(updatedEvent)
    });
    setEvents(prevEvents => prevEvents.map(prevEvent => prevEvent.id === event.id ? updatedEvent : prevEvent));
};


return (
    <div>
      {events.map((event) => (
          <ul>
          {event.title}, {event.date}, completed? {event.completed}{' '}
          <button onClick={() => toggleGoalCompletion(event)}>
            {event.completed ? 'Incomplete' : 'Complete'}
          </button>
          <button onClick={() => handleDelete(event.id)}>Delete</button>
        </ul>
      ))}
    </div>
  )
}

export default Event
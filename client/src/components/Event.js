import React from 'react'
import {useState, useEffect} from 'react'

const Event = () => {
    const [events, setEvents] = useState([])
    const [newEvent, setNewEvent] = useState({});
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

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

  
  const toggleEventCompletion = async (event) => {
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

const handleCreateEvent = async (event) => {
    event.preventDefault();
    const eventData = {
      title: event.target.elements.title.value,
      date: event.target.elements.date.value
    };
    setNewEvent(eventData);
    setEvents([...events, eventData]);
    try {
      const response = await fetch("/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(eventData)
      });
      const createdEvent = await response.json();
      setEvents(prevEvents => prevEvents.map(prevEvent => prevEvent === newEvent ? createdEvent : prevEvent));
      setNewEvent({});
    } catch (error) {
      setEvents(events.filter(event => event !== newEvent));
      setNewEvent({});
      console.error(error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'date') {
      setDate(e.target.value);
    }
  };



return (
    <div>
      {events.map((event) => (
          <ul key={event.id}>
          {event.title}, {event.date}, completed? {event.completed}{' '}
          <button onClick={() => toggleEventCompletion(event)}>
            {event.completed ? 'Incomplete' : 'Complete'}
          </button>
          <button onClick={() => handleDelete(event.id)}>Delete</button>
        </ul>
      ))}
       <form onSubmit={handleCreateEvent}>
      <input
       type="text"
       name="title"
       value={title}
       onChange={handleChange}
       placeholder="Event description"
     />
      <input
       type="date"
       name="date"
       value={date}
       onChange={handleChange}
     />
      {/* <input
       type="text"
       name="goal"
       value={goals}
       onChange={handleChange}
     /> */}
<button type="submit">Create Event</button>
</form>
    </div>
  )
}

export default Event
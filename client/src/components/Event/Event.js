import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateEventForm from './CreateEventForm';
import EditEventForm from './EditEventForm';
import DeleteEvent from './DeleteEvent';
import { updateEventWithServer, fetchEvents, } from '../../features/eventsSlice';

function Event({goals, tasks}) {
  
  const dispatch = useDispatch();

  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);


  const handleUpdateEvent = (id, event) => {
    dispatch(updateEventWithServer({
      id,
      completed: !event.completed
    }));
  };

  return (
    <>
      {/* <ul>
      {events.map((event) => (
          <li key={event.id}>
            {event.title}
            <ul>Date: {new Date(event.date + 'T00:00:00+00:00').toLocaleDateString("en-US", {timeZone: "UTC"})}</ul>
            <button onClick={() => handleUpdateEvent(event.id, event)}>
              {event.completed ? 'Complete' : 'Incomplete'}
            </button>
              <EditEventForm event={event}/>
                 <DeleteEvent id={event.id}/>
                  </li>
                  ))}
                  </ul> */}
                    <CreateEventForm />
                </>
              );
            };

   export default Event;
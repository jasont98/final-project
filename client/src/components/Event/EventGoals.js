import React from 'react';
import { useSelector } from 'react-redux';
import { getGoalsForEvent, getTasksForGoal } from '../../features/eventsSlice';

function EventGoals({ eventId }) {
  const goals = useSelector(state => getGoalsForEvent(state, eventId));
  const tasks = useSelector(state => getTasksForGoal(state, eventId));

  return (
    <>
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>{goal.description}</li>
        ))}
      </ul>
      {/* <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ul> */}
    </>
  );
}

export default EventGoals;
import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents, updateEventWithServer } from '../features/eventsSlice';
import { fetchGoals, updateGoalWithServer } from '../features/goalsSlice';
import { fetchTasks, updateTaskWithServer } from '../features/tasksSlice'
import {updateGoal} from '../features/goalsSlice';

const Profile = ({user}) => {

    const events = useSelector(state => state.events.events)
    const goals = useSelector(state => state.goals.goals);
    const tasks = useSelector(state => state.tasks.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchEvents());
      dispatch(fetchGoals());
      dispatch(fetchTasks());
    }, [dispatch]);

    const handleUpdateGoal = (id, goal) => {
      dispatch(updateGoalWithServer({
        id,
        completed: !goal.completed
      }));
    };

    const handleUpdateEvent = (id, event) => {
      dispatch(updateEventWithServer({
        id,
        completed: !event.completed
      }));
    };

  return (
      <div className="p-10">
      <h1 className="text-2xl font-bold">Name: {user.name}</h1>
      <h1 className="text-2xl font-bold">Birthday: {user.birthday}</h1>
      <h1 className="text-2xl font-bold">Today, You have:</h1>
      <ul className="list-disc pl-5">
        <li className="text-lg font-bold">Events:
          <ul className="list-disc pl-5">
            {events.map(event => (
               <li key={event.id}>
               <input
                  type="checkbox"
                  checked={event.completed}
                  onChange={() => handleUpdateEvent(event.id, event)}
                />
            {event.title}
              </li>
            ))}
          </ul>
      </li>
        <li className="text-lg font-bold">Goals:
          <ul className="list-disc pl-5">
            {goals.map(goal => (
              <li key={goal.id}>
               <input
                  type="checkbox"
                  checked={goal.completed}
                  onChange={() => handleUpdateGoal(goal.id, goal)}
                />
            {goal.description}
              </li>
            ))}
          </ul>
      </li>
        <li className="text-lg font-bold">Tasks:
          <ul className="list-disc pl-5">
            {tasks.map(task => (
        <li key={task.id}>{task.description}</li>
          ))}
        </ul>
      </li>
    </ul>
  </div>
  )   
}

export default Profile
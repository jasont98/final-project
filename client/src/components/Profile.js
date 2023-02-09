import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents, updateEventWithServer, updateEventCompletionWithServer, deleteEventWithServer } from '../features/eventsSlice';
import { fetchGoals, updateGoalWithServer, deleteGoalWithServer, updateGoalCompletionWithServer } from '../features/goalsSlice';
import { fetchTasks, updateTaskWithServer, deleteTaskWithServer, updateTaskCompletionWithServer } from '../features/tasksSlice'
import EditEventForm from './Event/EditEventForm';
import EditGoalForm from './Goal/EditGoalForm';
import EditTaskForm from './Task/EditTaskForm';



const Profile = ({user}) => {

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
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
      dispatch(updateGoalCompletionWithServer({
        id,
        completed: !goal.completed
      }));
      if (!goal.completed) {
        dispatch(deleteGoalWithServer(id));
      }
    };

    const handleUpdateEvent = (id, event) => {
      dispatch(updateEventCompletionWithServer({
        id,
        completed: !event.completed
      }));
      if (!event.completed) {
        dispatch(deleteEventWithServer(id));
      }
    };

    const handleUpdateTask = (id, task) => {
      dispatch(updateTaskCompletionWithServer({
        id,
        completed: !task.completed
      }));
    if (!task.completed) {
      dispatch(deleteTaskWithServer(id));
    }
};
    
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">Name: {user.name}</h1>
        <h1 className="text-2xl font-bold"> Birthday: {new Date(user.birthday).toLocaleDateString('en-US', {timeZone: 'UTC'})}</h1>
        <h1 className="text-2xl font-bold">Today is {formattedDate}, You have:</h1>
        <ul className="list-disc pl-5">
          <li className="text-lg font-bold">Events:
            <ul className="list-disc pl-5">
              {events
                .filter(event => new Date(event.date).toLocaleDateString() === formattedDate)
                .map(event => (
                  <li key={event.id}>
                  <input
                    type="checkbox"
                    checked={event.completed}
                    onChange={() => handleUpdateEvent(event.id, event)}
                  />  
                  {event.title}
                  <EditEventForm event={event}/>
                </li>
                ))}
            </ul>
          </li>
          <li className="text-lg font-bold">Goals:
            <ul className="list-disc pl-5">
            {goals
                .filter(goal => new Date(goal.date).toLocaleDateString() === formattedDate)
                .map(goal => (
                  <li key={goal.id}>
                  <input
                    type="checkbox"
                    checked={goal.completed}
                    onChange={() => handleUpdateGoal(goal.id, goal)}
                  />  
                  {goal.description}
                  <EditGoalForm goal={goal}/>
                </li>
                ))}
            </ul>
          </li>
          <li className="text-lg font-bold">Tasks:
            <ul className="list-disc pl-5">
            {tasks
                .filter(task => new Date(task.date).toLocaleDateString() === formattedDate)
                .map(task => (
                  <li key={task.id}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleUpdateTask(task.id, task)}
                  />  
                  {task.description}
                  <EditTaskForm task={task}/>
                </li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
    );
}

export default Profile
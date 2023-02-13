import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents, updateEventWithServer, updateEventCompletionWithServer, deleteEventWithServer } from '../features/eventsSlice';
import { fetchGoals, updateGoalWithServer, deleteGoalWithServer, updateGoalCompletionWithServer } from '../features/goalsSlice';
import { fetchTasks, updateTaskWithServer, deleteTaskWithServer, updateTaskCompletionWithServer } from '../features/tasksSlice'
import EditEventForm from './Event/EditEventForm';
import EditGoalForm from './Goal/EditGoalForm';
import EditTaskForm from './Task/EditTaskForm';
import { Switch } from "@material-tailwind/react";



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
  <div className="bg-gray-300 py-6 px-8">
  <h1 className="text-2xl font-bold">Name: {user.name}</h1>
  <h1 className="text-2xl font-bold"> Birthday: {new Date(user.birthday).toLocaleDateString('en-US', {timeZone: 'UTC'})}</h1>
  <h1 className="text-2xl font-bold">Today's Date: {formattedDate}</h1>
  </div>
  <ul className="list-disc pl-5">
  <li className="text-lg font-bold">
    <div className="text-xl font-bold mt-3 mb-3">Events:</div>
    <div className="flex flex-col mx-4 my-4">
      {events
        .filter(event => new Date(event.date).toLocaleDateString() === formattedDate)
        .map(event => (
          <div className="p-4 border rounded-lg shadow-md my-4">
            <div key={event.id}>
              <input class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="checkbox"
                checked={event.completed}
                onChange={() => handleUpdateEvent(event.id, event)}
              />  
              {event.title}
              <EditEventForm event={event} />
            </div>
          </div>
        ))}
    </div>
  </li>
  <li className="text-lg font-bold">
  <div className="text-xl font-bold mt-3 mb-3">Goals:</div>
    <div className="flex flex-col mx-4 my-4">
      {goals
        .filter(goal => new Date(goal.date).toLocaleDateString() === formattedDate)
        .map(goal => (
          <div className="p-4 border rounded-lg shadow-md my-4">
            <div key={goal.id}>
            <input class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="checkbox"
                checked={goal.completed}
                onChange={() => handleUpdateGoal(goal.id, goal)}
              />  
              {goal.description}
              <EditGoalForm goal={goal} />
            </div>
          </div>
        ))}
    </div>
  </li>

  <li className="text-lg font-bold">Tasks:
    <div className="flex flex-col mx-4 my-4">
      {tasks
        .filter(task => new Date(task.date).toLocaleDateString() === formattedDate)
        .map(task => (
          <div className="p-4 border rounded-lg shadow-md">
            <div key={task.id}>
            <input class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="checkbox"
                checked={task.completed}
                onChange={() => handleUpdateTask(task.id, task)}
              />  
              {task.description}
              <EditTaskForm task={task} />
            </div>
          </div>
        ))}
    </div>
  </li>
</ul>
  </div>
);
}

export default Profile

{/* <div className="p-10 bg-gray-700 h-screen font-medium items-center justify-center">
<section className="w-64 mx-auto bg-gray-800 rounded-2xl px-8 py-6 shadow-lg">
  <div className="flex items-center justify-between">
    <span className="text-gray-400 text-sm">{formattedDate}</span>
    <span className="text-emerald-400">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>
    </span>
  </div>
 
  <div className="mt-8 ">
    <h2 className="text-white font-bold text-2xl tracking-wide">{user.name}</h2>
  </div>
  <p className="text-emerald-400 font-semibold mt-2.5">
    Birthday: {user.birthday}
  </p>
  <div className="h-1 w-full bg-black mt-8 rounded-full">
    <div className="h-1 rounded-full w-2/5 bg-yellow-500"></div>
  </div>
  <div className="mt-3 text-white text-sm">
    <span className="text-gray-400 font-semibold">Storage:</span>
    <span>40%</span>
  </div>
</section>
</div>
);
}; */}

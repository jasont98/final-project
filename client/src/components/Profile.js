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
    console.log(goals)

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
console.log(formattedDate);    

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
    .filter(event => {
      const nums = event.date.split("-")
      const date = `${parseInt(nums[1])}/${nums[2]}/${nums[0]}`
      return date === formattedDate
    })
    .map(event => (
      <div className="p-4 border rounded-lg shadow-md my-4 relative bg-gray-200 bg-opacity-90">
      {/* Ping animation */}
        <span className="absolute top-0 right-0 mr-2 mt-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-700 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-600"></span>
        </span>
        {/* Existing code */}
        <div key={event.id}>
          <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
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
    .filter(goal => {
      const nums = goal.date.split("-")
      const date = `${parseInt(nums[1])}/${nums[2]}/${nums[0]}`
      return date === formattedDate
    })
    .map(goal => (
        <div className="p-4 border rounded-lg shadow-md my-4 relative bg-gray-200 bg-opacity-90">
        {/* Ping animation */}
        <span className="absolute top-0 right-0 mr-2 mt-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-700 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-600"></span>
        </span>
        {/* Existing code */}
        <div key={goal.id}>
          <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
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
    .filter(task => {
      const nums = task.date.split("-")
      const date = `${parseInt(nums[1])}/${nums[2]}/${nums[0]}`
      return date === formattedDate
    })
    .map(task => (
      <div className="p-4 border rounded-lg shadow-md my-4 relative bg-gray-200 bg-opacity-90">
      {/* Ping animation */}
        <span className="absolute top-0 right-0 mr-2 mt-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-700 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-600"></span>
        </span>
        {/* Existing code */}
        <div key={task.id}>
          <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
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



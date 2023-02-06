import React from 'react'
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import DeleteTask from '../Task/DeleteTask';
import CreateTaskForm from './CreateTaskForm';
import EditTaskForm from './EditTaskForm';
import { updateTaskWithServer, fetchTasks } from '../../features/tasksSlice';


const Task = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);


  const handleUpdateTask = (id, task) => {
    dispatch(updateTaskWithServer({
      id,
      completed: !task.completed
    }));
  };

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description}
            <ul>Date: {task.date}</ul>
            <button onClick={() => handleUpdateTask(task.id, task)}>
              {task.completed ? 'Incomplete' : 'Complete'}
            </button>
              <EditTaskForm task={task}/>
                 <DeleteTask id={task.id}/>
                  </li>
                  ))}
                  </ul>
                    <CreateTaskForm />
                </>
              );
            };

   export default Task;







// *****TEST CODE*****

//   const handleUpdate = (task) => {
//     fetch(`/tasks/${task.id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(task),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((updatedTask) => {
//         setTasks((prevTasks) =>
//           prevTasks.map((prevTask) =>
//             prevTask.id === updatedTask.id ? updatedTask : prevTask
//           )
//         );
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
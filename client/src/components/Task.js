import React from 'react'
import {useState, useEffect} from 'react'

const Task = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
      fetch("/tasks")
        .then((r) => r.json())
        .then((data) => setTasks(data));
    }, []);

  const handleDelete = (taskId) => {
    fetch(`/tasks/${taskId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== taskId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  
  const toggleTaskCompletion = async (task) => {
    const updatedTask = {...task, completed: !task.completed};
    await fetch(`/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify(updatedTask)
    });
    setTasks(prevTasks => prevTasks.map(prevTask => prevTask.id === task.id ? updatedTask : prevTask));
};


return (
    <div>
      {tasks.map((task) => (
          <ul>
          {task.description}, {task.date}, completed? {task.completed}{' '}
          <button onClick={() => toggleTaskCompletion(task)}>
            {task.completed ? 'Incomplete' : 'Complete'}
          </button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </ul>
      ))}
    </div>
  )
}

export default Task







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
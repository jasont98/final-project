import React from 'react'
import {useState, useEffect} from 'react'


const Task = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState({});
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

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


const handleCreateTask = async (event) => {
    event.preventDefault();
    const taskData = {
      description: event.target.elements.description.value,
      date: event.target.elements.date.value
    };
    setNewTask(taskData);
    setTasks([...tasks, taskData]);
    try {
      const response = await fetch("/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(taskData)
      });
      const createdTask = await response.json();
      setTasks(prevTasks => prevTasks.map(prevTask => prevTask === newTask ? createdTask : prevTask));
      setNewTask({});
    } catch (error) {
      setTasks(tasks.filter(task => task !== newTask));
      setNewTask({});
      console.error(error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'description') {
      setDescription(e.target.value);
    } else if (e.target.name === 'date') {
      setDate(e.target.value);
    }
  };
  
  return (
    <div>
      {tasks.map((task) => (
          <ul key={task.id}>
          {task.description}, {task.date}, completed? {task.completed}{' '}
          <button onClick={() => toggleTaskCompletion(task)}>
            {task.completed ? 'Incomplete' : 'Complete'}
          </button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </ul>
      ))}
      <form onSubmit={handleCreateTask}>
      <input
       type="text"
       name="description"
       value={description}
       onChange={handleChange}
       placeholder="Task description"
     />
<input
       type="date"
       name="date"
       value={date}
       onChange={handleChange}
     />
<button type="submit">Create Task</button>
</form>
</div>
);
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
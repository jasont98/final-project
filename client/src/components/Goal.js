import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createGoal } from '../goalsSlice';

const Goal = () => {
    const [goals, setGoals] = useState([])
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch();
    // const [newGoal, setNewGoal] = useState({});

    useEffect(() => {
      fetch("/goals")
        .then((r) => r.json())
        .then((data) => setGoals(data));
    }, []);

  const handleDelete = (goalId) => {
    fetch(`/goals/${goalId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setGoals(goals.filter((goal) => goal.id !== goalId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  
  const toggleGoalCompletion = async (goal) => {
    const updatedGoal = {...goal, completed: !goal.completed};
    await fetch(`/goals/${goal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify(updatedGoal)
    });
    setGoals(prevGoals => prevGoals.map(prevGoal => prevGoal.id === goal.id ? updatedGoal : prevGoal));
};

const handleCreateGoal = async (event) => {
  event.preventDefault();
  const goalData = {
    description: event.target.elements.description.value,
    date: event.target.elements.date.value
  };
  dispatch(createGoal(goalData));
  try {
    const response = await fetch("/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(goalData)
    });
    const createdGoal = await response.json();
    setGoals([...goals, createdGoal]);
  } catch (error) {
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


// return (
//     <div>
//       {goals.map((goal) => (
//           <ul key={goal.id}>
//           {goal.description}, {goal.date}, completed? {goal.completed}{' '}
//           <button onClick={() => toggleGoalCompletion(goal)}>
//             {goal.completed ? 'Incomplete' : 'Complete'}
//           </button>
//           <button onClick={() => handleDelete(goal.id)}>Delete</button>
//         </ul>
//       ))}
//        <form onSubmit={handleCreateGoal}>
//       <input
//        type="text"
//        name="description"
//        value={description}
//        onChange={handleChange}
//        placeholder="Goal description"
//      />
// <input
//        type="date"
//        name="date"
//        value={date}
//        onChange={handleChange}
//      />
// <button type="submit">Create Goal</button>
// </form>
//     </div>
//   )
// }

// export default Goal


return (
  <div>
    {goals.map((goal) => (
        <ul key={goal.id}>
        {goal.description}, {goal.date}, completed? {goal.comcompleted}{' '}
<button onClick={() => toggleGoalCompletion(goal)}>
{goal.completed ? 'Incomplete' : 'Complete'}
</button>
<button onClick={() => handleDelete(goal.id)}>Delete</button>
</ul>
))}
<form onSubmit={handleCreateGoal}>
<input
    type="text"
    name="description"
    value={description}
    onChange={handleChange}
    placeholder="Goal description"
  />
<input
    type="date"
    name="date"
    value={date}
    onChange={handleChange}
  />
<button type="submit">Create Goal</button>

</form>
    </div>
  )
    }
    export default Goal
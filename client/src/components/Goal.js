import React from 'react'
import {useState, useEffect} from 'react'

const Goal = () => {
    const [goals, setGoals] = useState([])

    useEffect(() => {
      fetch("/goals")
        .then((r) => r.json())
        .then((data) => setGoals(data));
    }, []);

  const handleDelete = (goalId) => {
    fetch(`/tasks/${goalId}`, {
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


return (
    <div>
      {goals.map((goal) => (
          <ul key={goal.id}>
          {goal.description}, {goal.date}, completed? {goal.completed}{' '}
          <button onClick={() => toggleGoalCompletion(goal)}>
            {goal.completed ? 'Incomplete' : 'Complete'}
          </button>
          <button onClick={() => handleDelete(goal.id)}>Delete</button>
        </ul>
      ))}
    </div>
  )
}

export default Goal

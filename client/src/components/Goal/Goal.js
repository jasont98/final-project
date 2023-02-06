import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateGoalForm from './CreateGoalForm';
import EditGoalForm from './EditGoalForm';
import DeleteGoal from './DeleteGoal';
import { updateGoalWithServer, fetchGoals, } from '../../features/goalsSlice';

function Goal() {
  
  const dispatch = useDispatch();

  const goals = useSelector((state) => state.goals.goals);

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);


  const handleUpdateGoal = (id, goal) => {
    dispatch(updateGoalWithServer({
      id,
      completed: !goal.completed
    }));
  };

  return (
    <>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            {goal.description}
            <ul>Date: {goal.date}</ul>
            <ul>
        {goal.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
            <button onClick={() => handleUpdateGoal(goal.id, goal)}>
              {goal.completed ? 'Incomplete' : 'Complete'}
            </button>
              <EditGoalForm goal={goal}/>
                 <DeleteGoal id={goal.id}/>
                  </li>
                  ))}
                  </ul>
                    <CreateGoalForm />
                </>
              );
            };

   export default Goal;


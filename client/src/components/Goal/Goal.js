import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateGoalForm from './CreateGoalForm';
import EditGoalForm from './EditGoalForm';
import DeleteGoal from './DeleteGoal';
import { updateGoalWithServer, fetchGoals, } from '../../features/goalsSlice';
import AddTaskToGoal from './AddTaskToGoal';
import {fetchTasks} from '../../features/tasksSlice';

function Goal() {
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goals.goals);
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchGoals());
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleUpdateGoal = (id, goal) => {
    dispatch(updateGoalWithServer({
      id,
      completed: !goal.completed
    }));
  };

  return (
    <>
      {/* <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            {goal.description}
            <ul>Date: {new Date(goal.date + 'T00:00:00+00:00').toLocaleDateString()}</ul>
            <ul>Tasks:
              {tasks.filter(task => task.goal_id === goal.id).map(task => (
                  <li key={task.id}> Tasks:{task.description}</li>
                ))}
            </ul>
            <button onClick={() => handleUpdateGoal(goal.id, goal)}>
              {goal.completed ? 'Complete' : 'Incomplete'}
            </button>
            <AddTaskToGoal goal_id={goal.id} />
            <EditGoalForm goal={goal} />
            <DeleteGoal id={goal.id} />
          </li>
        ))}
      </ul> */}
      <CreateGoalForm />
    </>
  );
}

export default Goal;

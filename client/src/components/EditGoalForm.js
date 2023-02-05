import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateGoalWithServer } from '../features/goalsSlice';


function EditGoalForm({ goal, handleGoalFormChange, handleSubmit }) {
    return (
      <form onSubmit={handleSubmit}>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={goal.description}
          onChange={handleGoalFormChange}
        />
        <br />
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={goal.date}
          onChange={handleGoalFormChange}
        />
        <br />
        <label>Tasks:</label>
        <input
          type="text"
          name="tasks"
          value={goal.tasks}
          onChange={handleGoalFormChange}
        />
        <br />
        <br />
        <button type="submit">Save</button>
      </form>
    );
  }

export default EditGoalForm;

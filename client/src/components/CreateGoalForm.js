import React from 'react'

function CreateGoalForm({ goal, handleGoalFormChange, handleSubmit }) {
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
        <button type="submit">Create</button>
      </form>
    );
  }

export default CreateGoalForm
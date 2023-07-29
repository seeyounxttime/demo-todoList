import React from 'react'

function AddTaskForm({handleSubmit, newTask, handleInputChange}) {
  return (
    
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="newitem">Add to Todo List</label>
      <input
        type="input"
        id="newitem"
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="submit">Add Item</button>
    </form>
  )
}

export default AddTaskForm
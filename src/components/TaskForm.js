import React, { useContext, useState } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
  // initializing addTask Context
  const { addTask } = useContext(TaskListContext);

  // initializing title State
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        onChange={handleChange}
        value={title}
        className='task-input'
        type='text'
        placeholder='Add task...'
        required
      ></input>
      <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>
          Add task
        </button>
        <button type='submit' className='btn clear-btn'>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;

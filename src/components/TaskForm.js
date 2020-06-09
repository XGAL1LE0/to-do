import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
  // initializing addTask Context
  const { addTask, clearList, editTask, editItem } = useContext(
    TaskListContext
  );

  // initializing title State
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
    // console.log(title);
  };

  // Things that happened after clicking Add Task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        onChange={handleChange}
        value={title}
        className='task-input'
        type='text'
        placeholder='Add tickets...'
        required
      ></input>

      <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>
          {editItem ? 'Update ' : 'Add'}
        </button>

        <button onClick={clearList} type='submit' className='btn clear-btn'>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;

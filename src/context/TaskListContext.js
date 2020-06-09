import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Set up backend' },
    { id: 2, title: 'Buy furniture for the new apartment' },
    { id: 3, title: 'Lead SCRUM on Thursday' },
  ]);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };

  return (
    <TaskListContext.Provider value={{ tasks, addTask, deleteTask, clearList }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;

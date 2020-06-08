import React, { createContext, useState } from 'react';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Set up backend' },
    { id: 2, task: 'Buy furniture for the new apartment' },
    { id: 3, task: 'Lead SCRUM on Thursday' },
  ]);

  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;

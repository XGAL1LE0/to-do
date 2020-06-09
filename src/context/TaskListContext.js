import React, { createContext, useState } from 'react';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Set up backend' },
    { id: 2, title: 'Buy furniture for the new apartment' },
    { id: 3, title: 'Lead SCRUM on Thursday' },
  ]);

  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;

import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskListContextProvider from './context/TaskListContext';

function App() {
  return (
    <TaskListContextProvider>
      <div className='App'>
        <TaskList />
      </div>
    </TaskListContextProvider>
  );
}

export default App;

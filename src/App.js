import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskListContextProvider from './context/TaskListContext';
import TaskForm from './components/TaskForm';
// import Header from './components/Header';
import Greeting from './components/Greeting';
import Time from './components/Time';

const App = () => {
  return (
    <TaskListContextProvider>
      <div className='container'>
        <div className='app-wrapper'>
          <div className='main'>
            {/* <Header /> */}
            <Greeting />
            <Time />
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;

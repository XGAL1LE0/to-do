import React from 'react';

const Greeting = () => {
  let date = new Date();
  let time = date.getHours();

  let greeting;

  if (time < 12) {
    greeting = 'Good Morning';
  } else if (time < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  return (
    <div className='header'>
      <h1>{greeting}</h1>
    </div>
  );
};
export default Greeting;

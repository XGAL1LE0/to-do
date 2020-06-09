import React from 'react';

const Greeting = () => {
  let date = new Date();
  let time = date.getHours();

  let greeting;
  const name = 'Axel';

  if (time < 12) {
    greeting = `Good Morning, ${name}`;
  } else if (time < 18) {
    greeting = `Good Afternoon, ${name}`;
  } else {
    greeting = `Good Evening, ${name}`;
  }

  return (
    <div className='header'>
      <h1>{greeting}</h1>
    </div>
  );
};
export default Greeting;

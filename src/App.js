import React, { useState } from 'react';
import './App.css';

function App() {
  let date = new Date().toDateString();
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time)
  }

  setInterval(UpdateTime, 1000)

  return (
    <div className='app morning'>
      <span className='heading'>TIME & DATE</span>
      <span className='time flicker'>{ctime}</span>
      <span className='date'>{date}</span>
    </div>
  );
}

export default App;

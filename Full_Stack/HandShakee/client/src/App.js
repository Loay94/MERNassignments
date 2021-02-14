import './App.css';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

function App() {

  const [socket] = useState(() => io(':8000'));

  useEffect(() =>{
    console.log('Is this running?');
    socket.on('welcome', data => console.log(data));

    return () => socket.disconnect(true);


  },[]);
  return (
    <div className="App">
      <h1>socket TTT</h1>
    </div>
  );
}

export default App;

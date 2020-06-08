import React, { useState } from 'react';
import './App.css';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0); // retorna [valor estado, retorna func para atualizar valor estado]

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title="iha" />
      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Inc</button>
    </div>
  );
}

export default App;

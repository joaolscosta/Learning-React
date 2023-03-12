import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("Mudaste o valor para " + counter);
  }, [counter]);
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button >
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button >
    </div >
  );
}
export default Counter;

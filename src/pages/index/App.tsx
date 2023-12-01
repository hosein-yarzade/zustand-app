import React from 'react';
import './App.css';
import useStore from './../../zustand/store';

function App() {
  const { count, increment, decrement ,reset ,totalCount} = useStore();
  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <span>Total Action : {totalCount}</span>
    </div>
  );
}

export default App;

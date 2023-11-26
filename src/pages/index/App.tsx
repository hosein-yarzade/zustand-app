import React from 'react';
import './App.css';
import useStore from './../../zustand/store';

function App() {
  const { count, increment, decrement } = useStore();
  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;

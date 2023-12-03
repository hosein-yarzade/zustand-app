import React, { Fragment } from 'react';
import './App.css';
// import useStore from './../../zustand/store';
import useStore from './../../zustand/persistStore';

function App() {
  const { count, increment, decrement ,reset ,totalCount} = useStore();
  const clearStoeage = ()=>{
    useStore.persist.clearStorage()
  }
  return (
    <Fragment>
    <div className="App">
      <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <span>Total Action : {totalCount}</span>
      </div>
      <div>
      <button onClick={clearStoeage}>clear persist</button>
      </div>
      
    </div>
    </Fragment>
  );
}

export default App;

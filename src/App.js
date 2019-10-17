import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, derement } from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         My Counter is { counter }
        </p>
        <button onClick={() => dispatch(increment(5))} > plus </button>
        <button onClick={() => dispatch(derement())} > minus</button>
      </header>
    </div>
  )
}

export default App;

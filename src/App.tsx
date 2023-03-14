import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/counter';
import { Cats } from './features/cats/cats';

function App() {
  return (
    <div>
      <Counter></Counter>
      <Cats></Cats>
    </div>
  );
}

export default App;

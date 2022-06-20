import React, { useState } from 'react';
import './CounterBasket.css';

function Btn({ children, onClick }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function Counter() {
  const [counter, updateCounter] = useState(0);

  function handleIncrement() {
    updateCounter(counter + 1);
  }

  function handleDecrement() {
    updateCounter(counter <= 0 ? 0 : counter - 1);
  }

  return (
    <div className='counterBasket'>
     <Btn onClick={handleDecrement}>-</Btn>
      <span className='textCounter'>{counter}</span>
      <Btn onClick={handleIncrement}>+</Btn>
    </div>
  );
}

export default Counter;

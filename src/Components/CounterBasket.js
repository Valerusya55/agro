import React, { useState } from 'react';

function Btn({ children, onClick }) {
  return (
    <button className='btnCounter' onClick={onClick}>
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
      <Btn onClick={handleIncrement}>+</Btn>
      <span className='textCounter'>{counter}</span>
      <Btn onClick={handleDecrement}>-</Btn>
    </div>
  );
}

export default Counter;

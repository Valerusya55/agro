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
    <div className='counter'>
      <Btn onClick={handleDecrement}>-</Btn>
      <span className='textCounter'>{counter}</span>
      <Btn onClick={handleIncrement}>+</Btn>
      <button className='btnBasket'>В корзину</button>
    </div>
  );
}

export default Counter;

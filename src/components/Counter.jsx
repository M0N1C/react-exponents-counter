import React, { useState } from 'react';
import ExponentTwo from './ExponentTwo';
import ExponentThree from './ExponentThree';
import ExponentFour from './ExponentFour';
import ExponentFive from './ExponentFive';
import ExponentSix from './ExponentSix';

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

    const handleInputChange = (event) => {
    const value = parseInt(event.target.value) || 0; // Convertir el valor a número o 0 si es NaN
    setCount(value);
  };

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>

      <div className="exponents-container">
        <ExponentTwo count={count} />
        <ExponentThree count={count} />
        <ExponentFour count={count} />
        <ExponentFive count={count} />
        <ExponentSix count={count} />
      </div>
    </div>
  );
};

export default Counter;

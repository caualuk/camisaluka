import React, { useState } from "react";
import './CounterButton.css';

function CounterButton() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <h1>Contador: {count}</h1>
      <button onClick={increment}>+ 1</button>
    </div>
  );
}

export default CounterButton;

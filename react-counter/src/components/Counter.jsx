import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1>Counter</h1>
      <p id="counter-value">Count: {count}</p>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="btn" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button className="btn" id="reset-btn" onClick={() => {
        setCount(0)
      }}>Reset</button>
    </div>
  );
};

export default Counter;

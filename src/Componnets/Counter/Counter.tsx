import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(20);
  const handleIncrement = () => {
    setCount(count => count + 1);
  };
  return (
    <div>
      <h1>
        {count}
      </h1>
      <button onClick={handleIncrement}> Increment</button>
    </div>
  );
};

export default Counter;

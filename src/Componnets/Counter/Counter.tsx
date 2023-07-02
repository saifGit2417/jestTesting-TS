import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [amount, setAmount] = useState<number | any>(null);
  const handleIncrement = () => {
    setCount(count => count + 1);
  };
  return (
    <div>
      <h1>
        {count}
      </h1>
      <button onClick={handleIncrement}> Increment</button>
      <br />
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={e => setAmount(parseInt(e.target.value))}
      />
      <br />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
};

export default Counter;

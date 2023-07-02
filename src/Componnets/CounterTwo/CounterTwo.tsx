import React from "react";
import CounterTwoTypes from "./Counter.types";

const CounterTwo = (props: CounterTwoTypes) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>
        {props.count}
      </p>
      {props.handleIncrement &&
        <button onClick={props.handleIncrement}>Increment</button>}
      {props.handleDecrement &&
        <button onClick={props.handleDecrement}>Decrement</button>}
    </div>
  );
};

export default CounterTwo;

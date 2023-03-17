import React, { useReducer } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const initialState = {
  count: 0,
};

type counterState = {
  count: number;
};

type IncrementActionType = { type: typeof INCREMENT };
type DecrementActionType = { type: typeof DECREMENT };
type ResetActionType = { type: typeof RESET };

type CounterActionType =
  | IncrementActionType
  | DecrementActionType
  | ResetActionType;

const reducer = (state: counterState, action: CounterActionType) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({
      type: INCREMENT,
    });
  };

  const handleReset = () => {
    dispatch({
      type: RESET,
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: DECREMENT,
    });
  };
  return (
    <div>
      <h1>Counter {state.count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default Counter;

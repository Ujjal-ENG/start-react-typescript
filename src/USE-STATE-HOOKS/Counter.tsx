import React, { useState } from "react";

type User = {
  id: number;
  name: String;
};
const Counter = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<null | User>(null);
  const handleIncremnet = () => {
    setCount((ps) => ps + 1);
  };
  const handleDecrement = () => {
    setCount((ps) => ps - 1);
  };

  const handleAddUser = () => {
    setUser({ id: 1, name: "Ujjal" });
    console.log(user);
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleIncremnet}
        disabled={count === 10 ? true : false}
      >
        +
      </button>
      <span>{count}</span>
      <button
        type="button"
        onClick={handleDecrement}
        disabled={count === 0 ? true : false}
      >
        {" "}
        -
      </button>

      <button type="submit" onClick={handleAddUser}>
        Add user
      </button>
      {user?.name}
    </div>
  );
};

export default Counter;

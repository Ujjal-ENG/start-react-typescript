import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<string>("");
  const [userNmae, setUserName] = useState("");
  const handleIncremnet = () => {
    setCount((ps) => ps + 1);
  };
  const handleDecrement = () => {
    setCount((ps) => ps - 1);
  };

  const handleAddUser = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUser(userNmae);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
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

      <div>
        <h2>Create New User</h2>
        <input
          type="text"
          placeholder="Enter the User Name"
          value={userNmae}
          onChange={handleChange}
        />
      </div>

      <button type="submit" onClick={handleAddUser}>
        Add user
      </button>
      <h1>{user}</h1>
    </div>
  );
};

export default Counter;

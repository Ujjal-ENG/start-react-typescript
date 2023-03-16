import React from "react";
type UserProps = { name: string; age: number; isRegistered: boolean };
const User = (props: UserProps) => {
  const { name, age, isRegistered } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>ujjalroy@gmail.com</p>
      <p>{age} years old</p>
      {isRegistered ? <p>Registered Student</p> : <p>Not Register student!!</p>}
    </div>
  );
};

export default User;

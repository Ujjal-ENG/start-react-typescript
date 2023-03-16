import React from "react";
type UserProps = {
  user: {
    name: string;
    age: number;
    isRegistered: boolean;
    lang: string[];
  };
};
const User = ({ user }: UserProps) => {
  const { name, age, isRegistered, lang } = user;
  return (
    <div>
      <h2>{name}</h2>
      <p>ujjalroy@gmail.com</p>
      <p>{age} yeats old!!</p>
      {isRegistered ? (
        <h2>Student is Already Registered!!</h2>
      ) : (
        <h2>Student is not register yet.!!</h2>
      )}
      <h3>
        Language you know:
        {lang.map((el, idx) => {
          return <span key={idx}>{" " + el + " "}</span>;
        })}
      </h3>
    </div>
  );
};

export default User;

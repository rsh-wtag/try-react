import React, { useState } from 'react';

const ObjectExample = () => {
  const [user, setUser] = useState({ name: 'John', age: 25 });

  const increaseAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
};

export default ObjectExample;

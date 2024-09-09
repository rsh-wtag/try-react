import React, { useState } from 'react';

const BasicExample = () => {
  const [name, setName] = useState('Radoan');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Name: {name}</p>
    </div>
  );
};

export default BasicExample;

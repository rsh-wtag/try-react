import React, { useState } from 'react';

const MultipleStateValues = () => {
  const [id, setID] = useState(1);
  const [name, setName] = useState('Radoan');

  return (
    <div>
      <div>
        <p>id: {id}</p>
        <button onClick={() => setID(id + 1)}>Increment id</button>
      </div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Username: {name}{id}</p>
      </div>
    </div>
  );
};

export default MultipleStateValues;

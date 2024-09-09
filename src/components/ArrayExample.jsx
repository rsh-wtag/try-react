import React, { useState } from 'react';

const ArrayExample = () => {
  const [items, setItems] = useState(['Apple', 'Banana']);

  const addItem = () => {
    setItems([...items, 'Orange']);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Orange</button>
    </div>
  );
};

export default ArrayExample;

import React, { useState } from 'react';

function AddItemToList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem('');
  };

  return (
    <div>
      <h2>Add Item to the List</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddItemToList;

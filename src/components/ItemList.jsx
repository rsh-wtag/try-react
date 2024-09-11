import React, { useReducer, useState } from 'react';

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'addItem':
      return { items: [...state.items, action.payload] };
    case 'removeItem':
      return { items: state.items.filter((_, index) => index !== action.payload) };
    default:
      return state;
  }
}

const ItemList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem) {
      dispatch({ type: 'addItem', payload: newItem });
      setNewItem('');
    }
  };

  const handleRemoveItem = (index) => {
    dispatch({ type: 'removeItem', payload: index });
  };

  return (
    <div>
      <h3>Item List</h3>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={handleAddItem}>Add Item</button>

      <ul>
        {state.items.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

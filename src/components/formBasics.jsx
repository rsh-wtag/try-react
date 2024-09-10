import React, { useState } from 'react';

function FormBasics() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with value:', inputValue);
  };

  return (
    <div>
      <h2>Form Basics</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormBasics;

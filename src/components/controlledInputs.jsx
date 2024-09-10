import React, { useState } from 'react';

function ControlledInputs() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2>Controlled Inputs</h2>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}

export default ControlledInputs;

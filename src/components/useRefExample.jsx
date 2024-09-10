import React, { useRef } from 'react';

function UseRefExample() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef Example</h2>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default UseRefExample;

import React, { useState, useEffect } from 'react';

function UseEffectConditional() {
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(0);

  // Conditional useEffect based on 'isVisible' state
  useEffect(() => {
    if (isVisible) {
      console.log('The component is visible');
    } else {
      console.log('The component is hidden');
    }
  }, [isVisible]); // Only runs when 'isVisible' changes

  return (
    <div>
      <h2>useEffect Conditional Example</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Component
      </button>

      {isVisible && (
        <div>
          <p>Component is currently visible.</p>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
      )}
    </div>
  );
}

export default UseEffectConditional;

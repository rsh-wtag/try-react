import React, { useEffect, useState } from 'react';

function UseEffectBasics() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component rendered or count changed:', count);
  }, [count]);

  return (
    <div>
      <h2>useEffect Basics</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEffectBasics;

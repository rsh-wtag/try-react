import React, { useEffect, useState } from 'react';

function UseEffectDependency() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('This runs only once');
  }, [0]); // a is changed dynamically, prevVal(a) is compared with currVal(a) => if eql useEffect won't call. if not then useEffect will call

  return (
    <div>
      <h2>useEffect Dependency List</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEffectDependency;

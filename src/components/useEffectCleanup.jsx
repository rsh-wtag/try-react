import React, { useEffect } from 'react';

function UseEffectCleanup() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  return <h2>useEffect Cleanup</h2>;
}

export default UseEffectCleanup;

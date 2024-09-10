import React, { useState } from 'react';

function ShortCircuit() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Short Circuit Evaluation</h2>
      {isLoggedIn && <p>Welcome back!</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default ShortCircuit;

import React, { useState } from 'react';

function MultipleReturns() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Multiple Returns</h2>
      {isLoggedIn ? <p>Welcome back!</p> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
    </div>
  );
}

export default MultipleReturns;

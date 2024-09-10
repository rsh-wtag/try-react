import React, { useState } from 'react';

function TernaryOperator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Ternary Operator</h2>
      {isLoggedIn ? <p>Welcome back!</p> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
    </div>
  );
}

export default TernaryOperator;

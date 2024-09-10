import React, { useState } from 'react';

function ShowHideComponent() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h2>Show/Hide Component</h2>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
      {isVisible && <p>This is visible</p>}
    </div>
  );
}

export default ShowHideComponent;

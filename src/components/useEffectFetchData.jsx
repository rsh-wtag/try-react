import React, { useEffect, useState } from 'react';

function UseEffectFetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h2>useEffect Fetch Data</h2>
      {data ? JSON.stringify(data) : 'Loading...'}
    </div>
  );
}

export default UseEffectFetchData;

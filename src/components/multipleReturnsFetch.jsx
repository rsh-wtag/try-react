import React, { useEffect, useState } from 'react';

function MultipleReturnsFetch() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Multiple Returns - Fetching Data</h2>
      Data: {JSON.stringify(data)}
    </div>
  );
}

export default MultipleReturnsFetch;

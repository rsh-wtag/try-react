import React from 'react';
import ChildA from './components/ChildA';

const App = () => {
  const name = "Radoan"
  return (
    <>
      <ChildA name = {name} />
    </>
  );
};

export default App;
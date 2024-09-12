import React, {createContext} from 'react';
import ChildA from './components/ChildA';

// What is contextAPI?
// >> create, provider, consumer
// How to use it?
// >> is contextAPI also problematic like propDrilling?

const data = createContext();

function App() {
  const name = "Radoan"
  return (
    <>
    <data.Provider value = {name}>
      <ChildA />
    </data.Provider>
    </>
  );
};

export default App;
export {data};
import React, {createContext} from 'react';
import ChildA from './components/ChildA';

// What is contextAPI?
// >> create, provider, consumer
// How to use it?
// is contextAPI also problematic like propDrilling? 
// >> Yes. Bcz for small amount of data, it is important to we need to use nested methods. Solution --> useContext hook

const data = createContext();
const data1 = createContext();

function App() {
  const name = "Radoan"
  const gender = "Male"
  return (
    <>
    <data.Provider value = {name}>
      <data1.Provider value = {gender}>
      <ChildA />
      </data1.Provider>
    </data.Provider>
    </>
  );
};

export default App;
export {data, data1};
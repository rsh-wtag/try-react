import React from 'react';
import Counter from './components/Counter';
import ComplexCounter from './components/ComplexCounter';
import ItemList from './components/ItemList';

const App = () => {
  return (
    <div>
      <h1>React useReduce Examples</h1>
      
      <Counter />
      <br />

      <ComplexCounter />
      <br />

      <ItemList />
      <br />
    </div>
  );
};

export default App;
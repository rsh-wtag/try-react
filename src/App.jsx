import React from 'react';
import Counter from './components/Counter';
import BasicExample from './components/BasicExample';
import ArrayExample from './components/ArrayExample';
import ObjectExample from './components/ObjectExample';
import MultipleStateValues from './components/MultipleStateValues';

const App = () => {
  return (
    <div>
      <h1>React useState Examples</h1>
      
      <Counter />
      <br />

      <BasicExample />
      <br />

      <ArrayExample />
      <br />

      <ObjectExample />
      <br />

      <MultipleStateValues />
    </div>
  );
};

export default App;

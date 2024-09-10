import React, { useState } from 'react';

// Import all components with camelCase file names but PascalCase component functions
import UseEffectBasics from './components/useEffectBasics';
import UseEffectConditional from './components/useEffectConditional';
import UseEffectDependency from './components/useEffectDependency';
import UseEffectCleanup from './components/useEffectCleanup';
import UseEffectFetchData from './components/useEffectFetchData';
import MultipleReturns from './components/multipleReturns';
import MultipleReturnsFetch from './components/multipleReturnsFetch';
import ShortCircuit from './components/shortCircuit';
import TernaryOperator from './components/ternaryOperator';
import ShowHideComponent from './components/showHideComponent';
import FormBasics from './components/formBasics';
import ControlledInputs from './components/controlledInputs';
import AddItemToList from './components/addItemToList';
import MultipleInputs from './components/multipleInputs';
import UseRefExample from './components/useRefExample';

function App() {
  const [activeComponent, setActiveComponent] = useState('UseEffectBasics');

  // Dictionary to map component names to actual components
  const components = {
    UseEffectBasics: <UseEffectBasics />,
    UseEffectConditional: <UseEffectConditional />,
    UseEffectDependency: <UseEffectDependency />,
    UseEffectCleanup: <UseEffectCleanup />,
    UseEffectFetchData: <UseEffectFetchData />,
    MultipleReturns: <MultipleReturns />,
    MultipleReturnsFetch: <MultipleReturnsFetch />,
    ShortCircuit: <ShortCircuit />,
    TernaryOperator: <TernaryOperator />,
    ShowHideComponent: <ShowHideComponent />,
    FormBasics: <FormBasics />,
    ControlledInputs: <ControlledInputs />,
    AddItemToList: <AddItemToList />,
    MultipleInputs: <MultipleInputs />,
    UseRefExample: <UseRefExample />
  };

  return (
    <div>
      <h1>React Concepts Demo</h1>

      {/* Navigation Menu */}
      <nav>
        {Object.keys(components).map((componentName) => (
          <button 
            key={componentName} 
            onClick={() => setActiveComponent(componentName)}
            style={{
              margin: '5px',
              padding: '8px',
              backgroundColor: activeComponent === componentName ? 'lightblue' : 'lightgray',
            }}
          >
            {componentName}
          </button>
        ))}
      </nav>

      {/* Render Active Component */}
      <div style={{ marginTop: '20px' }}>
        {components[activeComponent]}
      </div>
    </div>
  );
}

export default App;

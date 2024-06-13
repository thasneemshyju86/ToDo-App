import React from 'react';
import Todo from './components/Todo';

const App = () => {
  return (
    // py-4 means padding-top & bottom :1rem/ 16px , min-h-screen is min-height:100vh
    <div className='bg-stone-900 grid py-4 min-h-screen'> 
      <Todo/>
    </div>
  );
}

export default App;


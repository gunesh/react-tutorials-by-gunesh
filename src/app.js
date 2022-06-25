import React from 'react';
import Button from './components/button';

function App() {
  return (
    <div>
      <h1>My UI Packages!</h1>
      <Button
        onEvent={() => {
          console.log('Hello');
        }}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;

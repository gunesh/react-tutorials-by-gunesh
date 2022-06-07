import React, { Component } from 'react';

function Hoc(HocComponent) {
  return class extends Component {
    render() {
      return (
        <div>
          <HocComponent />
        </div>
      );
    }
  };
}

function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

export default Hoc(App);

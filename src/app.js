import React, { memo } from 'react';

class WithPureClassComponent extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    {
      console.log('Pure Class component Load');
    }
    return <h1>Hello == {this.props.name}</h1>;
  }
}

const WithPureFunctionalComponent = memo((props) => {
  return (
    <div>
      {console.log('Pure Functional component Load')}
      <h1>Hello == {props.name}</h1>
    </div>
  );
});

class WithoutPureClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {
      console.log('Class component Load');
    }
    return <h1>Hello == {this.props.name}</h1>;
  }
}

const WithoutPureFunctionalComponent = (props) => {
  return (
    <div>
      {console.log('Functional component Load')}
      <h1>Hello == {props.name}</h1>
    </div>
  );
};

export {
  WithPureFunctionalComponent,
  WithPureClassComponent,
  WithoutPureClassComponent,
  WithoutPureFunctionalComponent,
};

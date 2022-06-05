import React, { memo, useState } from 'react';

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

const App = (props) => {
  const [name, setName] = useState('Ramesh');
  var i = 2;
  setInterval(() => {
    i++;
    var name = i % 2 === 0 ? 'Gunesh' : 'Sarita';
    setName(name);
    console.log(i, name);
  }, 10000);

  return (
    <div>
      <WithPureFunctionalComponent name={name} />
      <WithPureClassComponent name={name} />

      <WithoutPureClassComponent name={name} />
      <WithoutPureFunctionalComponent name={name} />
    </div>
  );
};

export {
  WithPureFunctionalComponent,
  WithPureClassComponent,
  WithoutPureClassComponent,
  WithoutPureFunctionalComponent,
  App,
};

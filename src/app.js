import React, { memo, useState } from 'react';
import { Todos, WithoutTodos } from './Todos';

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
  // setInterval(() => {
  //   i++;
  //   i % 2 === 0 ? setName('Gunesh') : setName('Asatkar');
  //   console.log(i, i % 2);
  // }, 10000);

  return (
    <div>
      <WithPureFunctionalComponent name={name} />
      <WithPureClassComponent name={name} />

      <WithoutPureClassComponent name={name} />
      <WithoutPureFunctionalComponent name={name} />
    </div>
  );
};

const Todo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['todo 1', 'todo 2']);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <WithoutTodos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export {
  WithPureFunctionalComponent,
  WithPureClassComponent,
  WithoutPureClassComponent,
  WithoutPureFunctionalComponent,
  App,
  Todo,
};

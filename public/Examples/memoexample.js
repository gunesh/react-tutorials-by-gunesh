import React, { useEffect, useState, useCallback, useMemo } from 'react';
const WithMemoTest = (props) => {
  const { count, addTodo, todos } = props;
  console.log('MemoTest Render1');
  return (
    <div className="col-lg-8 offset-lg-2">
      {count}
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

const WithoutMemoTest = (props) => {
  const { count } = props;
  console.log('MemoTest Render2');
  return <div className="col-lg-8 offset-lg-2">{count}</div>;
};

class ClsWithoutMemo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { count } = this.props;
    console.log('MemoTest Render3');
    return (
      <>
        <div className="col-lg-8 offset-lg-2">{count}</div>
      </>
    );
  }
}
class ClsWithMemo extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { count } = this.props;
    console.log('MemoTest Render4');
    return (
      <>
        <div className="col-lg-8 offset-lg-2">{count}</div>
      </>
    );
  }
}
const MemoizeApp = React.memo(WithMemoTest);

const MemoizeExamples = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const addTodo = useCallback(() => {
    console.log('CLick');
    setTodos((t) => [...t, 'New Todo']);
  }, [todos]);

  return (
    <>
      <button
        onClick={() => {
          var d = count === 0 ? 1 : 0;
          setCount(d);
        }}
      >
        Memoize
      </button>
      <br />
      {calculation}
      <MemoizeApp count={count} todos={todos} addTodo={addTodo} /> <br />
      <WithoutMemoTest count={count} /> <br />
      <ClsWithoutMemo count={count} /> <br />
      <ClsWithMemo count={count} /> <br />
    </>
  );
};

export { MemoizeExamples };

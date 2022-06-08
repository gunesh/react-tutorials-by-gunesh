import React, { Component } from 'react';

const TableRow = (props) => {
  const { id, name } = props.obj;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
    </tr>
  );
};

const StockList = (props) => {
  const tabRow = () => {
    if (props.data instanceof Array) {
      return props.data.map(function (object, i) {
        return <TableRow obj={object} key={i} />;
      });
    }
  };
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Stock Name</td>
            <td>Stock Price</td>
          </tr>
        </thead>
        <tbody>{tabRow()}</tbody>
      </table>
    </div>
  );
};

export default function Hoc(HocComponent, data) {
  return class extends Component {
    render() {
      return <HocComponent data={data} />;
    }
  };
}

const StocksData = [
  {
    id: 1,
    name: 'TCS',
  },
  {
    id: 2,
    name: 'Infosys',
  },
  {
    id: 3,
    name: 'Atos',
  },
];

const Stocks = Hoc(StockList, StocksData);

class App extends Component {
  render() {
    return (
      <div>
        <Stocks />
      </div>
    );
  }
}

export default App;

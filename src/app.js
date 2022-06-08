import React, { Component } from 'react';
import StockList from './StockList';

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

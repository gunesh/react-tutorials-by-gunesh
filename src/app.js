import React, { Component } from 'react';
import StockList from './StockList';
import Hoc from './HOC';

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
    name: 'Reliance',
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

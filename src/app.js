import React, { Component } from 'react';
import StockList from './StockList';

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
      <h1>HOC Example!</h1>
      <StockList></StockList>
    </div>
  );
}

export default Hoc(App);

import React, { Component } from 'react';
import StockList from './StockList';
import UserList from './UserList';
import Hoc from './HOC';

const StocksData = [
  {
      id: 1,
      name: 'TCS'
        
  },
  {
      id: 2,
      name: 'Infosys'
  },
  {
      id: 3,
      name: 'Reliance'
  }
];
const UsersData = [
  {
      id: 1,
      name: 'Krunal'
        
  },
  {
      id: 2,
      name: 'Ankit'
  },
  {
      id: 3,
      name: 'Rushabh'
  }
];

const Stocks = Hoc(
  StockList,
  StocksData
);

const Users = Hoc(
  UserList,
  UsersData
);


class App extends Component {
  
  render() {
    return (
      <div>
        <Users></Users>
      </div>
    )
  }
}

export default App;
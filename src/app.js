import React, { Component } from 'react';


const StockList = (props) => {
  
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Stock Name</td>
            <td>Stock Price</td>
          </tr>
        </thead>
        <tbody>
          {props.data.map(function (object, i) {
            return <tr>
            <td>{object.id}</td>
            <td>
            <button onClick={(object)=>{props.emit(object)}}>{object.name}</button>
            </td>
          </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default function Hoc(HocComponent, data,name,emit) {
  return class extends Component {
    render() {
      return <>
      <h1>{name}</h1>
      <HocComponent data={data} emit={emit} />
      </>;
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
const onClickHandler = (data)=>{
console.log(data)
}

const Stocks = Hoc(StockList, StocksData,'My Table',onClickHandler);

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

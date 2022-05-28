import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../stores/ApplicationStore';

class GreetCls extends Component {
  render() {
    return <div>{store.greet}</div>;
  }
}

const SayHelloFun = () => {
  return <div>{store.greet}</div>;
};

const Greet = observer(GreetCls);
const SayHello = observer(SayHelloFun);

export { SayHello, Greet };

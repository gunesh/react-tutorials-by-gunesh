import React, { createContext, useContext } from 'react';
import { observer } from 'mobx-react';
import {
  action,
  computed,
  makeObservable,
  observable,
  autorun,
  runInAction,
} from 'mobx';

// Create Store File
class MyStore {
  myOptions = [];

  constructor() {
    makeObservable(this, {
      myOptions: observable,
    });
  }
  addEle() {
    this.myOptions.push({ a: 'Option', b: Math.random() });
  }
}

// Create Context
const myStoreContext = createContext(new MyStore());

// Create Custom hook
const useMyStore = () => useContext(myStoreContext);

function MyMobxTest() {
  const myStore = useMyStore();
  return (
    <div>
      <h1>MyMobxTest</h1>
      {JSON.stringify(myStore.myOptions)}
      <button
        onClick={() => {
          myStore.addEle();
        }}
      >
        Add Data in MobX
      </button>{' '}
    </div>
  );
}

export default observer(MyMobxTest);

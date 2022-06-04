import React, { createContext, useContext } from 'react';
import { observer } from 'mobx-react';
import { makeObservable, observable } from 'mobx';

//1. Create Store File
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

// 2.Create Context
const myStoreContext = createContext(new MyStore());

// 3.Create Custom hook
const useMyStore = () => useContext(myStoreContext);

// 4. Create Component
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

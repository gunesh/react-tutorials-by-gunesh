import React, { Fragment, useEffect } from 'react';
// import { observer } from 'mobx-react-lite';
import {observer} from 'mobx-react'
import { useMyStore } from './hooks';

const Hello = (prop) => {
  const myStore = useMyStore();
  const list = myStore.myOptions;
  // useEffect(() => {
  //   console.log('Before Add', myStore.myOptions);
  //   myStore.addEle();
  //   console.log('After Add', myStore.myOptions);
  // }, []);

  return (
    <Fragment>
      {list.map((item, index) => {
        return (
          <Fragment key={`${item.a}-${index}`}>
            {`- ${item.a}- `} <br />
          </Fragment>
        );
      })}
      <br />
      <button
        onClick={() => {
          myStore.addEle();
          console.log('After Add', myStore.myOptions);
        }}
      >
        Add Data in MobX
      </button>
    </Fragment>
  );
};
export default observer(Hello);

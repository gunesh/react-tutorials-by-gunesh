import React, { Fragment, useEffect } from 'react';
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
      {list.map((item) => {
        return (
          <Fragment>
            {`- ${item.a}- `} <br />
          </Fragment>
        );
      })}
    </Fragment>
  );
};
export default Hello;

import React, { Fragment, useEffect } from 'react';
// import { observer } from 'mobx-react-lite';
import { observer } from 'mobx-react';
import { useMyStore } from './hooks';

const Hello = (prop) => {
  const myStore = useMyStore();
  const list = myStore.myOptions;
  useEffect(() => {
    console.log('Before Add', myStore.itemDetails);

    console.log('After Add', myStore.itemDetails);
  }, []);

  return (
    <Fragment>
      {list.map((item, index) => {
        return (
          <Fragment key={`${item.a}-${index}`}>
            {`${item.a}-${index}`}{' '}
          </Fragment>
        );
      })}
      <br />
      Total : {list.length}
      <br />
      <button
        onClick={() => {
          myStore.fetchData();
          myStore.addEle();
          //  console.log('After Add Element', myStore.myOptions);
          myStore.apiData();
          //  console.log('API Response Data', myStore.itemDetails);
        }}
      >
        Add Data in MobX
      </button>
    </Fragment>
  );
};
export default observer(Hello);

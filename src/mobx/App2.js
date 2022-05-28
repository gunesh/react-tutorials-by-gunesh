import React, { Fragment } from 'react';
import Hello from './Hello';
import { observer } from 'mobx-react';
import { useMyStore } from './hooks';

function App2() {
  const myStore = useMyStore();
  const list = myStore.myOptions;
  return (
    <div>
      {list.map((item, index) => {
        return (
          <Fragment key={`${item.a}-${index}`}>
            {`${item.a}-${index}`}{' '}
          </Fragment>
        );
      })}
      <br />
      Total : {list.length} <br />
      <Hello />
    </div>
  );
}

export default observer(App2);

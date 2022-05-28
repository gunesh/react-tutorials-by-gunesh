import React, { Fragment } from 'react';
import { Captcha, MyCaptcha } from './captcha';
import Hello from './mobx/Hello';
import { observer } from 'mobx-react';
import { useMyStore } from './mobx/hooks';

function App() {
  const myStore = useMyStore();
  const list = myStore.myOptions;
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {list.map((item, index) => {
        return (
          <Fragment key={`${item.a}-${index}`}>
            {`- ${item.a}- `} <br />
          </Fragment>
        );
      })}
      <br />
      Total : {list.length}
      <Hello />
    </div>
  );
}

export default observer(App);

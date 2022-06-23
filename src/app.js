import React from 'react';
import { Captcha, MyCaptcha } from './captcha';
import Hello from './mobx/Hello';
import App2 from './mobx/App2';
import ControlledPanelGroup from './panel'
import Table from './mobx/table';
import GoogleChart from './Charts/GoogleChart';
import { MapContainer } from './GoogleMap';
import { TableExample } from './Tables';

function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {/* <App2 /> */}
      <ControlledPanelGroup />
    </div>
  );
}

export default App;

import React from 'react';
import { Captcha, MyCaptcha } from './captcha';
import Hello from './mobx/Hello';
import App2 from './mobx/App2';
import Table from './mobx/table';
import GoogleChart from './Charts/GoogleChart';
import { MapContainer } from './GoogleMap';
import { BasicTable } from './Tables';

function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <BasicTable />
    </div>
  );
}

export default App;

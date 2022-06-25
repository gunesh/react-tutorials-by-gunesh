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
      <pre>
      1. Using Functional Components and Hooks Instead of Classes
      2. Avoid Using State (If Possible)
      3. Organize Files Related to the Same Component in One Folder
      4. Avoid Using Indexes as Key Props
      5. Opt for Fragments Instead of Divs Where Possible
      6. Follow Naming Conventions
      7. Avoid Repetitive Code
      8. Use Object Destructuring For Props
      9. Dynamically Render Arrays Using Map
      10. Write Tests for Each React Component
      11. Use lazy-loading / code splitting
</pre>
    </div>
  );
}

export default App;

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import ExternalAppStore from './ExternalAppStore';   // External React Redux store
import { store, App } from './onelinesetup';   // Functional component and store
import AppClass from './class_base_cmp'  // Class based Approach
import { ExternalStore } from './redux/store';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={ExternalStore}>
    <ExternalAppStore />  
    {/* <App /> */}
    {/* <AppClass /> */}
  </Provider>
);

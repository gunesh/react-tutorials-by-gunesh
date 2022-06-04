import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import App from './app';
import { store, App } from './onelinesetup';
import AppClass from './class_base_cmp'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <AppClass />
  </Provider>
);

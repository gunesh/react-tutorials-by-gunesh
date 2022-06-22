import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, App, pstore,persistor  } from './onelinesetup'; // Functional component and store
import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={pstore}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

import React, {  } from 'react';
import { createRoot } from 'react-dom/client';
import { App,Todo } from './app';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div>
    <Todo />
  </div>
);

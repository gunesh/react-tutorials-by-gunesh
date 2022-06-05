import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  WithPureFunctionalComponent,
  WithPureClassComponent,
  WithoutPureClassComponent,
  WithoutPureFunctionalComponent,
} from './app';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div>
    <WithPureFunctionalComponent name="gunesh" />
    <WithPureClassComponent name="gunesh" />

    <WithoutPureClassComponent name="gunesh" />
    <WithoutPureFunctionalComponent name="gunesh" />
  </div>
);

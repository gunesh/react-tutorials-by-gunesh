import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './_reducers';

const loggerMiddleware = createLogger();

export const ExternalStore = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

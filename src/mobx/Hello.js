import React, { Fragment } from 'react';
import { useMyStore } from '../hooks';

const Hello = (prop) => {
  const myStore = useMyStore();

  return <Fragment>Hello</Fragment>;
};
export default Hello;

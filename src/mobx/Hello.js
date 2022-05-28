import React, { Fragment, useEffect } from 'react';
import { useMyStore } from '../hooks';

const Hello = (prop) => {
  const myStore = useMyStore();

  useEffect(() => {
    console.log('ABC');
  }, []);

  return <Fragment>Hello</Fragment>;
};
export default Hello;

import React, { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Search(props) {
  const debFun = (callback, delay) => {
    let timerId;
    console.log('AAA', timerId);
    clearTimeout = timerId;
    timerId = setTimeout(callback, delay);
  };
  return (
    <div className="col-lg-8 offset-lg-2">
      <input
        type="text"
        placeholder="Enter to search here"
        onChange={(e) => {
          debFun(props.callback, props.delay, e.target.value);
        }}
      />
    </div>
  );
}

export default Search;

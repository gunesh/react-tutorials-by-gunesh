import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state);
  console.log(user);
  const { name, age } = user.user;
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button
        onClick={() => {
          dispatch({ type: 'UPDATE_NAME', payload: 'ABC' });
        }}
      >
        {' '}
        Change NAme
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'UPDATE_AGE', payload: '22' });
        }}
      >
        {' '}
        Change Age
      </button>
      <br />
      {name}
      {age}
      <br />

      <div
        style={{ backgroundColor: 'red' }}
        onMouseEnter={(e) => {
          var timer = setTimeout(() => {
            console.log('Change Color to Green');
            
          }, 3000);
          // clearTimeout(timer);
          // setTimeout(() => {
          //   console.log('Change Color to WHite');
          // }, 3000);
        }}
        // onMouseLeave={(e) => {
        //   console.log('Mouse Leave');
        // }}
      >
        Hello
      </div>
    </div>
  );
}

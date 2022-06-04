import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import './style.css';

const initState = {
  items: [],
};
const users = function (state = initState, action) {
  console.log(state);
  console.log(action);
  if (action.type === 'ADD_USER') {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }
  if (action.type === 'GET_USER') {
    return {
      ...state,
      items: [...state.items],
    };
  }
  if (action.type === 'DELETE_USER') {
    return {
      ...state,
      items: state.items.filter((user) => user.name !== action.payload),
    };
  }

  return state;
};
const rootReducer = combineReducers({ users });
const middleware = applyMiddleware();
const store = createStore(rootReducer, initState, middleware);

function App() {
  const [fields, setFields] = useState({
    name: '',
    mark: '',
  });
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.users);
  const { name, mark } = fields;
  const onChangeHandler = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          onChangeHandler(e);
        }}
        placeholder="Enter Student Name"
      />
      <input
        type="text"
        name="mark"
        value={mark}
        onChange={(e) => {
          onChangeHandler(e);
        }}
        placeholder="Enter Student Mark"
      />
      <button
        onClick={() => {
          dispatch({ type: 'ADD_USER', payload: { mark, name } });
        }}
      >
        Save Data
      </button>
      <br />
      {userdata &&
        userdata.items.map((item) => {
          return (
            <>
              {' '}
              <b>
                My List :{item.name}--{item.mark}{' '}
                <button
                  onClick={() => {
                    dispatch({
                      type: 'DELETE_USER',
                      payload: item.name,
                    });
                  }}
                >
                  Delete User
                </button>
              </b>{' '}
              <br />
            </>
          );
        })}
    </div>
  );
}

// STore

export default App;

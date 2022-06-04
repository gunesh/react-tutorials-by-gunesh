import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initState = { item: [], loader: false };
function userReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, item: [...state.item, action.payload] };
    case 'REMOVE':
      return {
        ...state,
        item: state.item.filter((obj) => {
          return obj.id !== action.payload;
        }),
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(userReducer, initState);
  const { item, loader } = state;
  return (
    <div>
      <h1>useReducer Example</h1>
      
      <button
        onClick={() => {
          dispatch({ type: 'ADD', payload: { id: uuidv4() } });
        }}
      >
        Add
      </button>
      <br />
      {item.map((item) => {
        return (
          <>
            <b
              key={item.id}
              onClick={() => {
                dispatch({ type: 'REMOVE', payload: item.id });
              }}
            >
              {item.id}
            </b>{' '}
            <br />
          </>
        );
      })}
    </div>
  );
}

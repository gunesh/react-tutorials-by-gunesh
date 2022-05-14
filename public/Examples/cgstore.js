import { createStore, applyMiddleware, combineReducers } from 'redux';
const initState = {
  name: 'Gunesh',
  age: '10',
};
const userReducer = function (state = initState, action) {
  console.log(action)
  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        name: action.payload,
      };
    case 'UPDATE_AGE':
      return {
        age: action.payload,
      };
  }
  return state;
};
const rootReducer = combineReducers({
  user:userReducer,
});

const store = createStore(rootReducer, initState, applyMiddleware());
export default store;

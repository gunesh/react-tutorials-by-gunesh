import React,{useReducer} from 'react';

function userReducer(state={item:[],loader:false},action){
  switch(action.type){
    case "ADD":
      return {...state}
      default:
        return state
  }
}
export default function App() {
  const [state,dispatch] = useReducer(userReducer,[])
  console.log(state)
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

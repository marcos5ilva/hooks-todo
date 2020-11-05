import React, { useContext, useReducer } from 'react';
import { UserContext } from './index';
import './App.css';

const initialState = {
  count: 0
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      };
    case "decrement":
      return {
        count: state.count - 1
      };
    case "reset":
      return initialState;

    default:
      return initialState
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useContext(UserContext)
  return (
    <div className="App">

      <div>
        Count: {state.count}
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      </div>

    </div>
  );
}

export default App;

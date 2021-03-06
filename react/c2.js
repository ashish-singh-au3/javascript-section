import { useReducer } from "react";
import "./styles.css";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };
  return (
    <div className="App">
      <button onClick={increment}>+</button>
      {state.count}
      <button onClick={decrement}>-</button>
    </div>
  );
}

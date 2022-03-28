import { useReducer } from "react";
import "./styles.css";

const ACTIONS = {
  INCR : "incr",
  DECR : "decr",
  RESET : "reset",
  INCFIVE : "incfive"
}

function reducer(state,action){
  switch (action.type){
    case ACTIONS.INCR:
      return { count : state.count + 1 }
      case ACTIONS.DECR : 
      return {count : state.count - 1}
      case ACTIONS.RESET:
        return {count : 0}
      default:
        return state
  }

}

export default function App() {
  const[state,dispatch] = useReducer(reducer, {count : 0})


  const incr = () => {
    dispatch({type : "incr"})
  }

  const decr = () => {
    dispatch({type:"decr"})
  }
  const re = () => {
    dispatch({type:"reset"})
  }
  return (
    <div className="App">
{state.count}
<button onClick={incr}>+</button>
<button onClick={decr}>-</button>

<button onClick={re}>Reset</button>
<button>Inc 5</button>

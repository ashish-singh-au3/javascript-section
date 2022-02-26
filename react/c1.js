import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => count + 1);
  };

  const decrement = () => {
    setCount((prevCount) => count - 1);
  };
  return (
    <div className="App">
      <button onClick={increment}>+</button> {count}
      <button onClick={decrement}>-</button>
    </div>
  );
}

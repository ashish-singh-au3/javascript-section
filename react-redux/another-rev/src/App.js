import { useState } from "react";

import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <center>
        {" "}
        <h1 style={{ marginTop: "50px" }}>SImple practice App</h1>
      </center>

      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <ToDoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;

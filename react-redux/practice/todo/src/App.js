import React from "react";

import { useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);

  return (
    <div className="">
      <h1 className="heading">
        <center>Ashish's ToDo List</center>
      </h1>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList />
    </div>
  );
}

export default App;

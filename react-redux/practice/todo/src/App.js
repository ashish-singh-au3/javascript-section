import React from "react";

import { useState } from "react";

import Form from "./components/Form";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="">
      <h1 className="heading">
        <center>Ashish's ToDo List</center>
      </h1>
      <Form setInputText={setInputText} />
    </div>
  );
}

export default App;

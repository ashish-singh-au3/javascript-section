import { useState } from "react";

import Form from "./components/Form";
import ToDo from "./components/ToDo";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <center>
        {" "}
        <h1 style={{ marginTop: "50px" }}>SImple practice App</h1>
      </center>

      <Form inputText={inputText} setInputText={setInputText} />
      <ToDo />
    </div>
  );
}

export default App;

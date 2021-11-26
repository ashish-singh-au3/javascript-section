import Button from "@mui/material/Button";

import AddIcon from "@mui/icons-material/Add";

import React from "react";

const Form = ({ todos, setTodos, inputText, setInputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  /*   const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  }; */

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ]);
    setInputText("");
  };

  return (
    <div>
      <center>
        <form>
          {" "}
          <div className="form-group">
            <h2 style={{ marginTop: "10%" }}>To Do List </h2>
            <input
              type="text"
              value={inputText}
              onChange={inputTextHandler}
              placeholder="Enter todos here"
              style={{ height: "40px", width: "200px", fontSize: "18px" }}
            />
            <Button
              onClick={submitHandler}
              style={{ margin: "10px" }}
              type="submit"
              variant="contained"
            >
              <AddIcon />
            </Button>

            <br />
          </div>
        </form>
      </center>
    </div>
  );
};

export default Form;

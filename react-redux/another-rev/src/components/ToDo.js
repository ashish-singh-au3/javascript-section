import React from "react";

import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const ToDo = ({ todos, setTodos, text, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <div>
      <center>
        {" "}
        <li className="todo-items">
          <h2>{text}</h2>{" "}
          <Button style={{ margin: "10px" }} type="submit" variant="contained">
            <CheckIcon />
          </Button>
          <Button
            onClick={deleteHandler}
            style={{ margin: "10px" }}
            type="submit"
            variant="contained"
          >
            <CloseIcon />
          </Button>
        </li>
      </center>
    </div>
  );
};

export default ToDo;

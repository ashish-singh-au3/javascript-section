import React from "react";

import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const ToDoList = () => {
  return (
    <div>
      <center>
        {" "}
        <li className="todo-items">Here the todo will come</li>
        <Button style={{ margin: "10px" }} type="submit" variant="contained">
          <CheckIcon />
        </Button>
        <Button style={{ margin: "10px" }} type="submit" variant="contained">
          <CloseIcon />
        </Button>
      </center>
    </div>
  );
};

export default ToDoList;

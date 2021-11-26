import Button from "@mui/material/Button";

import AddIcon from "@mui/icons-material/Add";

import React from "react";

const Form = () => {
  return (
    <div>
      <center>
        <div className="form-group">
          <h2 style={{ marginTop: "10%" }}>To Do List </h2>
          <input
            type="text"
            placeholder="Enter todos here"
            style={{ height: "40px", width: "200px", fontSize: "18px" }}
          />
          <Button style={{ margin: "10px" }} type="submit" variant="contained">
            <AddIcon />
          </Button>

          <br />
        </div>
      </center>
    </div>
  );
};

export default Form;

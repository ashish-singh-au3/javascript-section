import React from "react";

const Todo = ({ text, todos, setTodos, todo }) => {
  //del handler
  const deleteHandler = () => {
    /*     console.log(todo);
     */

    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check" />
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash" />
      </button>
    </div>
  );
};

export default Todo;

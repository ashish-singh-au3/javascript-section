import React from "react";

import ToDo from "./ToDo";

const ToDoList = ({ setTodos, todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <ToDo
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
            todos={todos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;

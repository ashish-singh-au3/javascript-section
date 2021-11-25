import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

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
      <form>
        <input
          value={inputText}
          type="text"
          onChange={inputTextHandler}
          class="todo-input"
        />
        <button onClick={submitHandler} class="todo-button" type="submit">
          <i class="fas fa-plus-square"></i>
        </button>
        <div class="select">
          <select name="todos" class="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      <div class="todo-container">
        <ul class="todo-list"></ul>
      </div>
    </div>
  );
};

export default Form;

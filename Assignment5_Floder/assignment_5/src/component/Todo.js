import React, { useState } from "react";

const Todo = () => {
  const [enteredTodoList, setEnteredTodoList] = useState("");
  const [todos, setTodos] = useState([]);

  const onInputChange = (text) => {
    setEnteredTodoList(text.target.value);
  };

  const onClickAddTodo = () => {
    setTodos([...todos, enteredTodoList]);
    setEnteredTodoList("");
  };

  return (
    <div>
      <form>
        <input type="text" onChange={onInputChange} value={enteredTodoList} />
      </form>
      <button onClick={onClickAddTodo}>Add Todo List</button>
      {todos.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}
    </div>
  );
};

export default Todo;

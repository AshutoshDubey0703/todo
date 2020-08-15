import React from "react";

const Todo = ({ todos, deleteTodo }) => {
  const todoList = todos.map((todo) => {
    return (
      <div className="card" onClick={() => deleteTodo(todo.id)} key={todo.id}>
        <span className="card-body">{todo.contents}</span>
      </div>
    );
  });
  return <div>{todoList}</div>;
};

export default Todo;

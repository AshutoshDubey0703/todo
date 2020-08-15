import React from "react";

const Todo = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="card" onClick={() => deleteTodo(todo.id)} key={todo.id}>
          <span className="card-body">{todo.content}</span>
        </div>
      );
    })
  ) : (
    <div className="card">
      <span className="card-body text-center">You have no todo's left</span>
    </div>
  );

  return <div>{todoList}</div>;
};

export default Todo;

import React, { Component } from "react";
import Todo from "./components/todo";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        contents: "Buy Milk",
      },
      { id: 2, contents: "Sleep More" },
    ],
  };

  addTodo = (todo) => {
    const newTodos = [...this.state.todos, todo];
    console.log(newTodos);
    this.setState({ todos: newTodos });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  };

  render() {
    return (
      <div className="col-8">
        <h1 className="text-center mt-5">Todo's</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;

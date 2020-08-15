import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    id: null,
    contents: null,
  };

  handleChange = (e) => {
    let id = Math.random();
    this.setState({ id, contents: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ content: "" });
  };

  render() {
    return (
      <form className="form-horizontal m-5" onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label className="col-3 col-form-label" htmlFor="content">
            Add a new todo:
          </label>
          <div className="col-9">
            <input
              type="text"
              name="content"
              id="content"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.content}
            />
          </div>
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default AddTodo;

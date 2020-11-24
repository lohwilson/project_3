import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
export class Website extends Component {
  render() {
    const {
      handleChange,
      handleDelete,
      handleSubmit,
      toggleComplete,
      description,
      todos,
    } = this.props;
    return (
      <div>
        <h1>Todos</h1>
        <div>
          <AddTodo
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            description={description}
          />
        </div>
        <div>
          <Todos todos={todos} handleDelete={handleDelete} toggleComplete={toggleComplete} />
        </div>
      </div>
    );
  }
}

export default Website;

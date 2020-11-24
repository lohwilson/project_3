import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class Todos extends Component {
  render() {
    const { todos, handleDelete, toggleComplete } = this.props;
    return (
      <div>
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              handleDelete={handleDelete}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;

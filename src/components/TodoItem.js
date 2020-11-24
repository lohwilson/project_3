import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    const { handleDelete, toggleComplete, todo, key } = this.props;
    return (
      <div>
        <p>
          <input
            type="checkbox"
            onChange={()=>toggleComplete()}
          />{" "}
          {todo.description}
          {" "}
          <button onClick={()=>handleDelete()}>
            x
          </button>
        </p>
      </div>
    )
  }
}

export default TodoItem

import React, { Component } from "react";

export class addTodo extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { handleChange, handleSubmit, description } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="description">Describe: </label>
          <input
            type="text"
            id="description"
            onChange={handleChange}
            value={description}
          ></input>
          <input type="submit" />
        </form>

        
      </div>
    );
  }
}

export default addTodo;

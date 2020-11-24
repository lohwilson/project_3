import React, { Component } from 'react'

export class Input extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <h2>Sunny Shelter</h2>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="name" />
          <input
            type="text"
            id="name"
            value={this.props.name}
            placeholder="name of animal"
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="species" />
          <input
            type="text"
            id="species"
            value={this.props.species}
            placeholder="species of animal"
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="breed" />
          <input
            type="text"
            id="breed"
            value={this.props.breed}
            placeholder="breed of animal"
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="sex" />
          <input
            type="text"
            id="sex"
            value={this.props.sex}
            placeholder="sex of animal"
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="image" />
          <input
            type="text"
            id="image"
            value={this.props.image}
            placeholder="image of animal"
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="age" />
          <input
            type="text"
            id="age"
            value={this.props.age}
            placeholder="age of animal"
            onChange={this.props.handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Input;

import React, { Component } from 'react'

export class ListAll extends Component {
  render() {
    return (
      <li>
        <p>{this.props.animal.name}</p>
        <p>{this.props.animal.species}</p>
        <p>{this.props.animal.breed}</p>
        <p>{this.props.animal.sex}</p>
        <p>{this.props.animal.image}</p>
        <p>{this.props.animal.age}</p>
        <button onClick={() => this.props.deleteAnimal(this.props.animal._id)}>Remove</button>
      </li>
    );
  }
}

export default ListAll

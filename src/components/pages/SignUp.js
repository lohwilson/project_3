import React, { Component } from 'react'

export class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    
  }

  render() {
    return (
      <div>
        <h1>SignUp</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input id="username" type="text" value={this.state.username} onChange={this.handleChange} />
          <br />
          <label htmlFor="email">Email: </label>
          <input id="email" type="text" value={this.state.email} onChange={this.handleChange} />
          <br />
          <label htmlFor="password">Password: </label>
          <input id="password" type="text" value={this.state.password} onChange={this.handleChange} />
          <br />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default SignUp

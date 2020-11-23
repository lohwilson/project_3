import React, { Component } from 'react';
import auth from '../auth/auth';

export class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <button onClick={
          () => {
            auth.login(() => {
              this.props.history.push("/MainPage")
            })
          }
        }>Login</button>
      </div>
    )
  }
}

export default Login

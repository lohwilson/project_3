import React, { Component } from 'react'
import auth from '../auth/auth'

export class MainPage extends Component {
  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <button onClick={() => {
          auth.logout(() => {
            this.props.history.push("/");
          });
        }}
        >Logout</button>
      </div>
    )
  }
}

export default MainPage

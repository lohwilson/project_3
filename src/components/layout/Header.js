import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from '../auth/auth';
export class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1>Project 3</h1>
        <Link style={linkStyle} to="/">
          Home
        </Link>{" "}
        |
        <Link style={linkStyle} to="/about">
          About
        </Link>{" "}
        |
        <Link style={linkStyle} to="/login">
          Login
        </Link>{" "}
        |
        <Link style={linkStyle} to="/signup">
          Sign Up
        </Link>{" "}
        <button onClick={() => {
          auth.logout(() => {
            this.props.history.push("/");
          });
        }}
        >Logout</button>
      </header>
    );
  }
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;

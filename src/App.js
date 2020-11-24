import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import Header from "./components/layout/Header";
import Website from "./components/Website";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/layout/Footer";
import MainPage from "./components/snippetr/MainPage";
import axios from "axios";
import "./App.css";
import Input from "./components/Input";
import ListAll from "./components/ListAll";

export class App extends Component {
  constructor(state) {
    super(state);
    this.state = {
      todos: [],
      description: "",
    };
  }

  componentDidMount() {
    console.log("component mounted");
  }

  handleDelete = (index) => {
    console.log("deleting ", index);
  };

  toggleComplete = (index) => {
    console.log("toggle complete ", index);
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handle submit");

    const response = await axios.post("/todos", {description: this.state.description});
    const result = await response.data;
    await this.setState({
      todos: [result, ...this.state.todos],
      description: ""
    })

    // const todo = {
    //   description: this.state.description,
    // };
    // this.setState({
    //   todos: [todo, ...this.state.todos],
    //   description: "",
    // });
  };

  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <div className="container">
              <Header />
              <Route
                exact
                path="/"
                render={(props) => (
                  <Website
                    handleChange={this.handleChange}
                    handleDelete={this.handleDelete}
                    handleSubmit={this.handleSubmit}
                    toggleComplete={this.toggleComplete}
                    todos={this.state.todos}
                    description={this.state.description}
                  />
                )}
              />
              {/* // <Route exact path="/" component={Website} /> */}
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/signUp" component={SignUp} />
              <ProtectedRoute path="/MainPage" component={MainPage} />
              {/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
              <Footer />
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import Header from "./components/layout/Header";
import Website from "./components/Website";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/layout/Footer";
import MainPage from "./components/snippetr/MainPage";
import axios from "axios";
import './App.css';



export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
    console.log('component mounted');
  }

  render() {
    return (
      <Router>
        <Switch>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={(props) => (
              <React.Fragment>
                <Website />
              </React.Fragment>
              )}
            />
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
    )
  }
}

export default App


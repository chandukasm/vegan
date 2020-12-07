import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ForgotPassword from "./screens/ForgotPassword";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/fpass">
            <ForgotPassword />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    );
  }
}

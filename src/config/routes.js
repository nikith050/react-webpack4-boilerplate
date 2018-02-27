import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Home from "../components/Home";
import About from "../components/About";
export default class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    );
  }
}

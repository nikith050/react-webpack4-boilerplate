import * as React from "react";
import "./App.css";
import Routes from "./config/routes";

import Header from "./components/Header";

const logo = require("./logo.svg");

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React And Webpack 4</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;

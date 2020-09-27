import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
// import { Route } from "react-router-dom";

import Home from "./components/Home";
import "./sass/main.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;

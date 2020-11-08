import React, { Component } from "react";
import Navigation from "./components/Navigation";

import { connect } from "react-redux";

import { Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";

import Home from "./pages/Home";
import About from "./pages/About";
import "./sass/main.scss";

class App extends Component {
  render() {
    return (
      <div
      // className={
      //   // "u-bg--grey--whisper" +
      //   this.props.menuOpen ? "u-fixed  u-of--hidden" : ""
      // }
      // className="u-ff--sarabun"
      >
        {/* <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} /> */}
        <ComingSoon />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menuOpen: state.menuOpen,
  };
};

export default connect(mapStateToProps, {})(App);

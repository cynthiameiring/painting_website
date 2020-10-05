import React, { Component } from "react";
import { connect } from "react-redux";

// import { Route } from "react-router-dom";
import Home from "./components/Home";
import "./sass/main.scss";

class App extends Component {
  render() {
    return (
      <div
        className={
          // "u-bg--grey--whisper" +
          this.props.menuOpen ? "u-fixed  u-of--hidden" : ""
        }
        // className="u-bg--grey--whisper"
      >
        <Home />
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

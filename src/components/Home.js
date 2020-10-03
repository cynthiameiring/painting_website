import React, { Component } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Card from "./Card";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    posts: null,
  };

  render() {
    return (
      <div className="app">
        <Navigation />
        <Header />
        {/* <Card /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menuOpen: state.menuOpen,
  };
};

export default connect(mapStateToProps, {})(Home);

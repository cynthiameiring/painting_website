import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    posts: null,
  };

  componentDidMount() {}

  render() {
    const menuOpen = this.props.menuOpen;
    return (
      <div className="app">
        <div className={menuOpen ? "overlay-visible" : "overlay-hidden"}></div>
        <Header />
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

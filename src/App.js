import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "./sass/main.scss";
import { breakpoint } from "./actions/breakpoint";

import ComingSoon from "./pages/ComingSoon";

import About from "./pages/About";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import RecentWorks from "./pages/RecentWorks";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App(props) {
  window.addEventListener("resize", function () {
    props.breakpoint(window.innerWidth);
  });
  window.addEventListener("load", function () {
    props.breakpoint(window.innerWidth);
  });

  return (
    <div
      className={
        // "u-bg--grey--whisper" +
        props.menuOpen ? "u-fixed  u-of--hidden" : ""
      }
      // className="u-ff--sarabun"
    >
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/artworks" component={RecentWorks} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/gallery" component={Gallery} />

      {/* <ComingSoon /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    menuOpen: state.menuOpen,
  };
};

export default connect(mapStateToProps, { breakpoint })(App);

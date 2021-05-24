import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "./sass/main.scss";
import { breakpoint } from "./actions/breakpoint";
import About from "./pages/About";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import RecentWorks from "./pages/RecentWorks";
// import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Process from "./pages/Process";
// import Signup from "./pages/Signup";
import ArtDetailPage from "./pages/ArtDetailPage";
import { Link } from "react-router-dom";

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
        "u-padding--b8  " +
        (props.menuOpen
          ? "u-fixed  u-of--hidden  u-width--100  u-height--100"
          : "u-width--100  u-height--100")
      }
    >
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/artworks" component={RecentWorks} />
      <Route exact path="/contact" component={Contact} />
      {/* <Route exact path="/gallery" component={Gallery} /> */}
      <Route exact path="/process" component={Process} />
      {/* <Route exact path="/signup" component={Signup} /> */}
      <Route path="/artworks/:id" component={ArtDetailPage} />
      <Route exact path="/privacy-policy" component={Privacy} />

      {/* <ComingSoon /> */}
      <div className="u-width--100  u-absolute  u-bottom--0  u-text--center  u-padding--y5">
        <div className="u-flex  u-flex--justify--center">
          <span className="u-weight--200  u-black" style={{ fontSize: "14px" }}>
            &copy; 2020, Cynthia Meiring &nbsp; - &nbsp;
          </span>
          <Link
            style={{ fontSize: "14px" }}
            className="u-weight--200  u-black  u-no-decoration"
            to="/privacy-policy"
          >
            <span className="">Privacy policy</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    menuOpen: state.menuOpen,
    headerImageLoaded: state.headerImageLoaded,
  };
};

export default connect(mapStateToProps, { breakpoint })(App);

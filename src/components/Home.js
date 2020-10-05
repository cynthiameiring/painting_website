import React, { Component } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import TextImage from "./TextImage";
import { connect } from "react-redux";
import CardContainer from "./CardContainer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <TextImage />
        <CardContainer />
      </div>
    );
  }
}

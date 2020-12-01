import React, { Component } from "react";
import IntroContentPage from "../components/IntroContentPage";
import data from "../data.js";

export default class About extends Component {
  state = {
    about: data.pages.find((p) => p.title === "About"),
  };
  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y5  u-padding--y7@sm  u-padding--y8@lg">
        <IntroContentPage
          title="About the artist"
          intro={this.state.about.teaserText}
        />
      </div>
    );
  }
}

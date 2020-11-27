import React, { Component } from "react";
import IntroContentPage from "../components/IntroContentPage";

export default class About extends Component {
  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y5  u-padding--y7@sm  u-padding--y8@lg">
        <IntroContentPage title="About Cynthia" intro="Stukje schrijven" />
      </div>
    );
  }
}

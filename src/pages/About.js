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
        <div className="o-grid__row">
          <div className="o-grid__col  o-grid__col12@xs  o-grid--offset--2@sm  o-grid__col--8@sm  o-grid--offset--3@lg  o-grid__col--6@lg">
            <img
              src={this.state.about.teaserImage.url}
              alt={this.state.about.teaserImage.alt}
              className="u-relative  u-width--100"
            />
          </div>
        </div>
      </div>
    );
  }
}

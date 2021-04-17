import React, { Component } from "react";
import IntroContentPage from "../components/IntroContentPage";
import SignupForm from "../components/SignupForm";

import data from "../data.js";

export default class About extends Component {
  state = {
    about: data.pages.find((p) => p.title === "Signup"),
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y6  u-padding--y7@sm  u-padding--y8@lg">
        <IntroContentPage
          title="Join the collectors list"
          intro={this.state.about.teaserText}
        />
        <div className="o-grid__row">
          <div className="o-grid__col  o-grid__col--12@xs  o-grid--offset--2@sm  o-grid__col--8@sm  o-grid--offset--3@lg  o-grid__col--6@lg">
            <SignupForm />
          </div>
        </div>
      </div>
    );
  }
}

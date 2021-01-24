import React, { Component } from "react";
import IntroContentPage from "../components/IntroContentPage";
import data from "../data.js";

export default class Process extends Component {
  state = {
    process: data.pages.find((p) => p.title === "Process"),
  };

  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y6  u-padding--y7@sm  u-padding--y8@lg">
        <IntroContentPage
          title="Process videos"
          intro={this.state.process.teaserText}
        />
        <div className="o-grid__row">
          <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@md">
            <div className="v-video-container  u-margin--b4">
              <iframe
                width="560px"
                height="349px"
                title="youtubeVideo1"
                src="https://www.youtube.com/embed/o2KtDZLDRsc"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@md">
            <div className="v-video-container  u-margin--b4">
              <iframe
                width="560px"
                height="349px"
                title="youtubeVideo2"
                src="https://www.youtube.com/embed/Ks7b85c-jnw"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

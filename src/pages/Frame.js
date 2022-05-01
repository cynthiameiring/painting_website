import React, { Component } from "react";
import data from "../data.js";
import frameDetail3 from "../media/Frame/FrameDetail3.jpg"
import frameDetail4 from "../media/Frame/FrameDetail4.JPG"
import nutanFrameDetail from "../media/OrangeFlower/nutan_frame_detail.jpg";
import nutanFinishedFrame from "../media/OrangeFlower/nutan_finished_frame.jpg";
import ButtonText2 from "../components/ButtonText2";


export default class Frame extends Component {
  state = {
    frame: data.pages.find((p) => p.title === "Ready to hang"),
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y6  u-padding--y7@sm  u-padding--y8@lg">
        <div className="u-margin--b5  u-margin--b3@sm  u-margin--b0@md">
          <ButtonText2 text="< Back" src="/" />
        </div>
        <div className="o-grid__row  u-margin--b5  u-margin--b6@sm  u-margin--b7@lg">
          <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--10@md  o-grid--offset--1@md  u-flex  u-flex--column  u-flex--items--center">
            <h2 className="h2-font  u-margin--b4">
              {this.state.frame.title}
            </h2>
            <span className="u-weight--200  u-size--9  u-size--8@md  u-text--center  u-margin--b5  u-margin--b6@sm  u-margin--b7@lg">
              {this.state.frame.teaserText}
            </span>
            <div className="u-flex  u-flex--wrap  u-width--100">
              <img
                src={nutanFinishedFrame}
                alt="Posing with shoe painting"
                className="u-flex  u-width--50  u-padding--2  u-padding--3@md"
              />
              <img
                  src={frameDetail4}
                  alt="Posing with shoe painting"
                  className="u-flex  u-width--50  u-padding--2  u-padding--3@md"
              />
              <img
                  src={frameDetail3}
                  alt="Posing with shoe painting"
                  className="u-flex  u-width--50  u-padding--2  u-padding--3@md"
              />

              <img
                  src={nutanFrameDetail}
                  alt="Posing with shoe painting"
                  className="u-flex  u-width--50  u-padding--2  u-padding--3@md"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

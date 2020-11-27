import React, { Component } from "react";

export default class Process extends Component {
  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y5  u-padding--y7@sm  u-padding--y8@lg">
        <div className="o-grid__row">
          <div className="o-grid__col  o-grid__col--12@xs  u-flex  u-flex--column  u-flex--items--center">
            <h2 className="u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  u-lh--2">
              Process videos
            </h2>
            <hr className="v-rectangle--middle" />
            <p className="u-margin--b6  u-weight--200  u-size--9  u-size--8@md  u-text--center">
              Stukje tekst nog schrijven
            </p>
          </div>
        </div>
        <div className="o-grid__row">
          <div
            className="o-grid__col  o-grid__col--12@xs o-grid__col--6@sm"
            style={{
              overflow: "hidden",
              height: "0",
              paddingBottom: "56%",
              position: "relative",
            }}
          >
            <iframe
              title="youtubeVideo1"
              style={{
                left: "0",
                top: "0",
                height: "100%",
                width: "100%",
                position: "absolute",
              }}
              src="https://www.youtube.com/embed/o2KtDZLDRsc"
              frameBorder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div
            className="o-grid__col  o-grid__col--12@xs o-grid__col--6@sm"
            style={{
              overflow: "hidden",
              height: "0",
              paddingBottom: "56%",
              position: "relative",
            }}
          >
            <iframe
              title="youtubeVideo2"
              style={{
                left: "0",
                top: "0",
                height: "100%",
                width: "100%",
                position: "absolute",
              }}
              src="https://www.youtube.com/embed/R6MVv0lkRaM"
              frameBorder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

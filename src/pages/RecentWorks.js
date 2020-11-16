import React, { Component } from "react";
import TextImage from "../components/TextImage";
import IntroContentPage from "../components/IntroContentPage";

export default class RecentWorks extends Component {
  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y5  u-padding--y7@sm  u-padding--y8@lg">
        <IntroContentPage
          title="Recent artworks"
          intro="Nog een introductie schrijven"
        />

        <div className="o-grid__row">
          <div className={`o-grid__col  o-grid__col--6@xs  o-grid__col--3@md`}>
            <img
              src={require("../media/Guitar-finished.jpeg")}
              alt="Posing with shoe painting"
              className="u-relative  u-width--100  u-block"
            />
            <p>Titel 1</p>
          </div>
          <div className={`o-grid__col  o-grid__col--6@xs  o-grid__col--3@md`}>
            <img
              src={require("../media/Guitar-finished.jpeg")}
              alt="Posing with shoe painting"
              className="u-relative  u-width--100  u-block"
            />
            <p>Titel 1</p>
          </div>
          <div className={`o-grid__col  o-grid__col--6@xs  o-grid__col--3@md`}>
            <img
              src={require("../media/Guitar-finished.jpeg")}
              alt="Posing with shoe painting"
              className="u-relative  u-width--100  u-block"
            />
            <p>Titel 1</p>
          </div>
          <div className={`o-grid__col  o-grid__col--6@xs  o-grid__col--3@md`}>
            <img
              src={require("../media/Guitar-finished.jpeg")}
              alt="Posing with shoe painting"
              className="u-relative  u-width--100  u-block"
            />
            <p>Titel 1</p>
          </div>
        </div>
      </div>
    );
  }
}

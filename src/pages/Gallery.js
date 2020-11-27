import React, { Component } from "react";
import IntroContentPage from "../components/IntroContentPage";

import TextImage from "../components/TextImage";

export default class Gallery extends Component {
  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y5  u-padding--y7@sm  u-padding--y8@lg">
        <IntroContentPage
          title="Gallery"
          intro="Nog een introductie schrijven"
        />
        <div className="o-grid__row  u-padding--b2">
          <div className="o-grid__col  o-grid__col--12@xs">
            <div className="u-flex  u-flex--wrap">
              <img
                src={require("../media/Guitar-finished.jpeg")}
                alt="Posing with shoe painting"
                className="u-relative  u-block  u-width--50  u-width--33@md  u-width--25@lg  u-padding--1"
              />
              <img
                src={require("../media/Guitar-finished.jpeg")}
                alt="Posing with shoe painting"
                className="u-relative  u-block  u-width--50  u-width--33@md  u-width--25@lg  u-padding--1"
              />
              <img
                src={require("../media/Guitar-finished.jpeg")}
                alt="Posing with shoe painting"
                className="u-relative  u-block  u-width--50  u-width--33@md  u-width--25@lg  u-padding--1"
              />
              <img
                src={require("../media/Guitar-finished.jpeg")}
                alt="Posing with shoe painting"
                className="u-relative  u-block  u-width--50  u-width--33@md  u-width--25@lg  u-padding--1"
              />
              <img
                src={require("../media/Guitar-finished.jpeg")}
                alt="Posing with shoe painting"
                className="u-relative  u-block  u-width--50  u-width--33@md  u-width--25@lg  u-padding--1"
              />
              <img
                src={require("../media/Guitar-finished.jpeg")}
                alt="Posing with shoe painting"
                className="u-relative  u-block  u-width--50  u-width--33@md  u-width--25@lg  u-padding--1"
              />
              <img
                src={require("../media/Guitar-finished.jpeg")}
                alt="Posing with shoe painting"
                className="u-relative  u-block  u-width--50  u-width--33@md  u-width--25@lg  u-padding--1"
              />
              <img
                src={require("../media/Guitar-finished.jpeg")}
                alt="Posing with shoe painting"
                className="u-relative  u-block  u-width--50  u-width--33@md  u-width--25@lg  u-padding--1"
              />
              <img
                src={require("../media/Guitar-finished.jpeg")}
                alt="Posing with shoe painting"
                className="u-relative  u-block  u-width--50  u-width--33@md  u-width--25@lg  u-padding--1"
              />
              <img
                src={require("../media/Guitar-finished.jpeg")}
                alt="Posing with shoe painting"
                className="u-relative  u-block  u-width--50  u-width--33@md  u-width--25@lg  u-padding--1"
              />
              <img
                src={require("../media/Guitar-finished.jpeg")}
                alt="Posing with shoe painting"
                className="u-relative  u-block  u-width--50  u-width--33@md  u-width--25@lg  u-padding--1"
              />
              <img
                src={require("../media/Guitar-finished.jpeg")}
                alt="Posing with shoe painting"
                className="u-relative  u-block  u-width--50  u-width--33@md  u-width--25@lg  u-padding--1"
              />
              <img
                src={require("../media/Guitar-finished.jpeg")}
                alt="Posing with shoe painting"
                className="u-relative  u-block  u-width--50  u-width--33@md  u-width--25@lg  u-padding--1"
              />
              <img
                src={require("../media/Guitar-finished.jpeg")}
                alt="Posing with shoe painting"
                className="u-relative  u-block  u-width--50  u-width--33@md  u-width--25@lg  u-padding--1"
              />
              <img
                src={require("../media/Guitar-finished.jpeg")}
                alt="Posing with shoe painting"
                className="u-relative  u-block  u-width--50  u-width--33@md  u-width--25@lg  u-padding--1"
              />
              <img
                src={require("../media/Guitar-finished.jpeg")}
                alt="Posing with shoe painting"
                className="u-relative  u-block  u-width--50  u-width--33@md  u-width--25@lg  u-padding--1"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

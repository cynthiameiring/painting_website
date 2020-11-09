import React, { Component } from "react";

import TextImage from "../components/TextImage";

export default class Gallery extends Component {
  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-padding--t8">
        <div className="o-grid__row ">
          <div className="o-grid__col  o-grid__col--12@xs  u-flex  u-text--center">
            <p>Recent artworks</p>
          </div>
        </div>
        <div className="o-grid__row  u-flex  u-padding--b2">
          <div className={`o-grid__col  o-grid__col--6@xs  o-grid__col--3@md`}>
            <img
              src={require("../media/Guitar-finished.jpeg")}
              alt="Posing with shoe painting"
              className="u-relative  u-width--100  u-block"
            />
          </div>
          <div className={`o-grid__col  o-grid__col--6@xs  o-grid__col--3@md`}>
            <img
              src={require("../media/Guitar-finished.jpeg")}
              alt="Posing with shoe painting"
              className="u-relative  u-width--100  u-block"
            />
          </div>
          <div className={`o-grid__col  o-grid__col--6@xs  o-grid__col--3@md`}>
            <img
              src={require("../media/Guitar-finished.jpeg")}
              alt="Posing with shoe painting"
              className="u-relative  u-width--100  u-block"
            />
          </div>
          <div className={`o-grid__col  o-grid__col--6@xs  o-grid__col--3@md`}>
            <img
              src={require("../media/Guitar-finished.jpeg")}
              alt="Posing with shoe painting"
              className="u-relative  u-width--100  u-block"
            />
          </div>
        </div>
        <div className="o-grid__row  u-flex">
          <div className={`o-grid__col  o-grid__col--6@xs  o-grid__col--3@md`}>
            <img
              src={require("../media/Guitar-finished.jpeg")}
              alt="Posing with shoe painting"
              className="u-relative  u-width--100  u-block"
            />
          </div>
          <div className={`o-grid__col  o-grid__col--6@xs  o-grid__col--3@md`}>
            <img
              src={require("../media/Guitar-finished.jpeg")}
              alt="Posing with shoe painting"
              className="u-relative  u-width--100  u-block"
            />
          </div>
          <div className={`o-grid__col  o-grid__col--6@xs  o-grid__col--3@md`}>
            <img
              src={require("../media/Guitar-finished.jpeg")}
              alt="Posing with shoe painting"
              className="u-relative  u-width--100  u-block"
            />
          </div>
          <div className={`o-grid__col  o-grid__col--6@xs  o-grid__col--3@md`}>
            <img
              src={require("../media/Guitar-finished.jpeg")}
              alt="Posing with shoe painting"
              className="u-relative  u-width--100  u-block"
            />
          </div>
        </div>
      </div>
    );
  }
}

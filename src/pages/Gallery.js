import React, { Component } from "react";
import { connect } from "react-redux";

// import IntroContentPage from "../components/IntroContentPage";
import clock1 from "../media/clock-detail1.jpg";
import clock3 from "../media/Alarmclock2.jpg";
import clock2 from "../media/clock-detail2.jpg";
import alufoilFinished from "../media/alufoilsFinished.jpg";
import alufoil from "../media/alufoil-gold-detail1.jpg";
import shoeFinished from "../media/shoe.jpg";
import guitarFinished from "../media/Guitar-finished.jpeg";
import guitar4 from "../media/guitar-detail4.jpg";
import guitar3 from "../media/guitar-detail3.jpeg";

import shellFinished from "../media/shell-finished.jpg";
import shell1 from "../media/shell-detail1.jpg";
import shell2 from "../media/shell-detail2.jpg";
// import botanicalFinished from "../media/green_plant/green_plant_finished.jpeg";
import indianRing1 from "../media/indian_ring/indianring_finished.jpg";
import indianRing2 from "../media/indian_ring/indianring_detail6.jpg";

import greenPlantFinished from "../media/green_plant/green_plant_finished.jpeg";

import greenPlant1 from "../media/green_plant/green_plant_detail1.jpg";
import teapot2 from "../media/teapot2.jpg";
import yellowrose1 from "../media/yellowrose1.jpeg";
import yellowrose2 from "../media/yellowrose2.jpeg";
import indianShoe1 from "../media/indianShoe1.jpg";
import manShoe1 from "../media/man_shoe1.jpeg";
import pinkRibbon from "../media/pink_ribbon_finished.jpeg";

import data from "../data.js";
import { Link } from "react-router-dom";

class Gallery extends Component {
  state = {
    gallery: data.pages.find((p) => p.title === "Gallery"),
    images: [
      shoeFinished,
      shellFinished,
      guitarFinished,
      clock2,

      greenPlant1,
      indianRing1,

      // clock1,
      manShoe1,

      alufoil,
      yellowrose1,

      shell1,

      indianShoe1,
      guitar4,
      indianRing2,
      yellowrose2,
      greenPlantFinished,
      // manShoe1,
      shell2,

      // clock3,
      pinkRibbon,

      guitar3,
    ],
  };
  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y5  u-padding--y7@sm  u-padding--y8@lg">
        {/* <IntroContentPage
          title={this.state.gallery.title}
          intro={this.state.gallery.teaserText}
        /> */}
        <div className="o-grid__row  u-margin--b4  u-margin--b6@sm  u-margin--b7@lg">
          <div className="o-grid__col  o-grid__col--12@xs  u-flex  u-flex--column  u-flex--items--center">
            <h2 className="u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  u-lh--2  u-margin--b4">
              {this.state.gallery.title}
            </h2>
            <span className="u-weight--200  u-size--9  u-size--8@md  u-text--center">
              {this.state.gallery.teaserText}
              <Link
                className="u-black  u-no-decoration  u-weight--500"
                to="/process"
              >
                here.
              </Link>
            </span>
          </div>
        </div>
        <div className="o-grid__row  u-padding--b2">
          <div className="o-grid__col  o-grid__col--12@xs">
            <div className="u-flex  u-flex--wrap">
              {this.state.images.map((image, index) => (
                <img
                  src={image}
                  alt="Posing with shoe painting"
                  key={index}
                  className={
                    "u-padding--1  u-fit--cover  _height--gallery  " +
                    (this.props.breakpoint === "sm" ? "u-width--50" : "")
                  }
                  style={{ maxWidth: "100%", flexGrow: "1" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    breakpoint: state.breakpoint,
  };
};

export default connect(mapStateToProps, {})(Gallery);

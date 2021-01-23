import React, { Component } from "react";
import { connect } from "react-redux";
// import IntroContentPage from "../components/IntroContentPage";
import clock2 from "../media/clock-detail2.jpg";
import clock2Cropped from "../media/clock-detail2-cropped.jpg";

import shoeFinished from "../media/shoe.jpg";
import guitarFinished from "../media/Guitar-finished-resized.jpeg";
import guitar4 from "../media/guitar-detail4.jpg";
import guitar3 from "../media/guitar-detail3.jpeg";
import shellFinished from "../media/Shell/shell-finished.jpg";
import shell1 from "../media/Shell/shell-detail1.jpg";
import shell1Cropped from "../media/Shell/shell-detail1-cropped.jpg";
import shell2 from "../media/Shell/shell-detail2.jpg";
import indianRing1 from "../media/Indian_ring/indianring_finished.jpg";
import indianRing2 from "../media/Indian_ring/indianring_detail6.jpg";
import greenPlantFinished from "../media/Green_plant/green_plant_finished.jpeg";
import greenPlant1 from "../media/Green_plant/green_plant_detail1.jpg";
import yellowrose1 from "../media/yellowrose1.jpeg";
import yellowrose2 from "../media/yellowrose2.jpeg";
import yellowrose2Cropped from "../media/yellowrose2-cropped.jpeg";
import indianShoe1 from "../media/indianShoe1.jpg";
import manShoe1 from "../media/man_shoe1.jpeg";
import pinkRibbon from "../media/pink_ribbon_finished.jpeg";
import triangular1 from "../media/Triangular/Triangular1_wip1.jpeg";

import data from "../data.js";
import { Link } from "react-router-dom";

class Gallery extends Component {
  state = {
    gallery: data.pages.find((p) => p.title === "Gallery"),
    imagesForDesktop: [
      shoeFinished,
      shellFinished,
      guitarFinished,
      clock2,
      greenPlant1,
      guitar3,
      indianRing1,
      triangular1,
      guitar4,
      yellowrose2,
      greenPlantFinished,
      shell2,
      pinkRibbon,
      shell1,
      manShoe1,
      indianShoe1,
      indianRing2,
      yellowrose1,
    ],
    imagesForMobile: [
      shoeFinished,
      shellFinished,
      guitarFinished,
      clock2Cropped,
      greenPlant1,
      guitar3,
      indianRing1,
      triangular1,
      guitar4,
      yellowrose2Cropped,
      greenPlantFinished,
      shell2,
      pinkRibbon,
      shell1Cropped,
      manShoe1,
      indianShoe1,
      indianRing2,
      yellowrose1,
    ],
  };
  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-padding--y6  u-padding--y7@sm  u-padding--y8@lg">
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
            <div className="u-flex@md  u-flex--wrap  u-width--100  u-hidden">
              {this.state.imagesForDesktop.map((image, index) => (
                <img
                  src={image}
                  alt="Posing with shoe painting"
                  key={index}
                  className={"u-padding--1  u-fit--cover  _height--gallery  "}
                  style={{}}
                />
              ))}
            </div>
            <div className="u-flex  u-flex--wrap  u-width--100  u-hidden@md">
              {this.state.imagesForMobile.map((image, index) => (
                <img
                  src={image}
                  alt="Posing with shoe painting"
                  key={index}
                  className={"u-padding--1  u-fit--cover  _height--gallery  "}
                  style={{}}
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

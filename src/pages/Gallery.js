import React, { Component } from "react";
import IntroContentPage from "../components/IntroContentPage";
import clock1 from "../media/clock-detail1.jpg";
import clock2 from "../media/clock-detail2.jpg";
import alufoil from "../media/alufoil-gold-detail1.jpg";
import shoeFinished from "../media/shoe.jpg";
import guitarFinished from "../media/Guitar-finished.jpeg";
import shellFinished from "../media/shell-finished.jpg";
import shell1 from "../media/shell-detail1.jpg";
import shell2 from "../media/shell-detail2.jpg";
import data from "../data.js";

export default class Gallery extends Component {
  state = {
    gallery: data.pages.find((p) => p.title === "Gallery"),
    images: [
      clock1,
      guitarFinished,
      shellFinished,
      alufoil,
      shell1,
      clock2,
      shoeFinished,
      shell2,
    ],
  };
  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y5  u-padding--y7@sm  u-padding--y8@lg">
        <IntroContentPage
          title={this.state.gallery.title}
          intro={this.state.gallery.teaserText}
        />
        <div className="o-grid__row  u-padding--b2">
          <div className="o-grid__col  o-grid__col--12@xs">
            <div className="u-flex  u-flex--wrap">
              {this.state.images.map((image) => (
                <img
                  src={image}
                  alt="Posing with shoe painting"
                  className="u-padding--1  u-fit--cover  _height--gallery"
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

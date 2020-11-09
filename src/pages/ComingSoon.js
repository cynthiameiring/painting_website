import React, { Component } from "react";
import ButtonText from "../components/ButtonText";
import Guitar from "../media/Guitar-finished-resized.jpeg";

export default class ComingSoon extends Component {
  render() {
    let imagePos = "";
    let textPos = "";
    if (this.props.imagePosition === "right") {
      console.log("rechts");
      imagePos = "u-order--2  u-order--1@md";
      textPos = "u-padding--r7";
    } else {
      console.log("links");
      textPos = "u-padding--l7";
    }
    return (
      <div
        className="u-padding--b8  _margin--top--20vh"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="o-grid  o-grid--fixed  u-width--100">
          <div className="o-grid__row  u-flex">
            <div
              className={`o-grid__col  o-grid__col--12@xs  o-grid__col--6@md  ${imagePos}`}
            >
              <img
                src={Guitar}
                alt="Posing with shoe painting"
                className="u-relative  u-width--100  u-block"
              />
            </div>
            <div
              className={`o-grid__col  o-grid__col--12@xs  o-grid__col--6@md  u-flex  u-flex--items--center  u-flex--justify--center`}
            >
              <div className="u-padding--t7  u-padding--t0@md  u-padding--l7@md">
                <h2 className="u-margin--b6  u-size--6  u-size--5@md  u-size--4@lg  u-size--3@xl  u-weight--600  u-lh--2  v-rectangle  v-rectangle--mobile">
                  Coming soon
                </h2>
                <p
                  className="u-weight--200  u-size--9  u-size--8@sm  u-margin--b6"
                  style={{ letterSpacing: "1px" }}
                >
                  Hold tight and stay tuned, because this website will be
                  launched soon. Can't you wait to see which artworks are
                  available or you want to get in touch? Please send an email
                  to: <b> hello@cynthiameiring.com</b>. Or check out Cynthia's
                  instagram account by pressing the button below.
                </p>
                <ButtonText
                  text="Go to Instagram"
                  src="https://www.instagram.com/cynthia_meiring_art/"
                  handleClick={this.handleClick}
                  newTab={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

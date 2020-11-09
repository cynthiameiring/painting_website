import React, { Component } from "react";
import shoes from "../media/shoe-cropped.jpg";
import blob1 from "../media/svg/blob1.svg";
import ButtonText from "./ButtonText";

import { connect } from "react-redux";

export default class TextImage extends Component {
  // state = {
  //   menuItems: ["Gallery", "About", "Process", "Contact"],
  //   menuOpen: false,
  // };

  handleClick = () => {
    console.log("jajaja");
  };

  componentDidMount() {}

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
      <div className="u-padding--b8">
        <div className="o-grid  o-grid--fixed  u-width--100">
          <div className="o-grid__row  u-flex">
            <div
              className={`o-grid__col  o-grid__col--12@xs  o-grid__col--6@md  ${imagePos}`}
            >
              <div className="u-relative  u-width--100">
                <img
                  src={require("../media/Guitar-finished.jpeg")}
                  alt="Posing with shoe painting"
                  className="u-relative  u-width--100  u-block"
                />
              </div>
            </div>
            <div
              className={`o-grid__col  o-grid__col--12@xs  o-grid__col--6@md  ${textPos}  u-flex  u-flex--items--center  u-flex--justify--center`}
            >
              <div className="u-padding--b7">
                <h2 className="u-margin--b6  u-size--6  u-size--5@md  u-size--4@lg  u-size--3@xl  u-weight--600  u-lh--2  v-rectangle  v-rectangle--mobile">
                  Recent artworks
                </h2>
                <p className="u-weight--200  u-size--9  u-size--8@sm  u-margin--b6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  tempus libero ut magna placerat, ut auctor dui malesuada. Duis
                  lobortis odio metus, nec placerat metus congue id. Ut id magna
                  orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Etiam tempus libero ut magna placerat, ut auctor dui
                  malesuada. Duis lobortis odio metus, nec placerat metus congue
                  id. Ut id magna orci.
                </p>
                <ButtonText
                  text="Go to gallery"
                  handleClick={this.handleClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     menuOpen: state.menuOpen,
//   };
// };

// export default connect(mapStateToProps, {})(Home);

import React, { Component } from "react";
import shoes from "../media/shoe-cropped.jpg";
import blob1 from "../media/svg/blob1.svg";
import ButtonText from "./ButtonText";

import { connect } from "react-redux";

export default class TextImage extends Component {
  handleClick = () => {
    console.log("jajaja");
  };

  componentDidMount() {}

  render() {
    return (
      <div className="u-padding--b8">
        <div className="o-grid  o-grid--fixed  u-width--100">
          <div className="o-grid__row  u-flex">
            <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@md  u-order--2  u-order--1@md">
              <div className="u-relative  u-width--100">
                <img
                  src={shoes}
                  alt="Posing with shoe painting"
                  className="u-relative  u-width--100  u-z--2  u-padding--l4@md  u-padding--l6@xl  u-padding--b4  u-padding--b6@sm  u-padding--b4@md  u-padding--b6@xl  u-block"
                />
                <div className="u-hidden  u-block@md  u-width--100  u-padding--r4@md  u-padding--r6@xl  u-absolute  u-bottom--0  _top--image--line-art">
                  <div className="u-width--100  u-height--100  u-bs--solid  u  u-bw--4  u-bc--black  u-z--1"></div>
                </div>
              </div>
            </div>
            <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@md  u-order--1  u-order--2@md  u-flex  u-flex--items--center  u-flex--justify--center">
              <p className="u-weight--200  u-size--9  u-size--8@sm  u-margin--b6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                tempus libero ut magna placerat, ut auctor dui malesuada. Duis
                lobortis odio metus, nec placerat metus congue id. Ut id magna
                orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam tempus libero ut magna placerat, ut auctor dui malesuada.
                Duis lobortis odio metus, nec placerat metus congue id. Ut id
                magna orci.
              </p>
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
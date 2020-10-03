import React, { Component } from "react";
import shoes from "../media/shoe-cropped.jpg";
import blob1 from "../media/svg/blob1.svg";

import { connect } from "react-redux";

export default class Card extends Component {
  state = {
    posts: null,
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <div
          class="u-bg--blue--tranquil  u-flex  u-flex--column  u-flex--row@md  u-flex--justify--center  u-padding--t5  u-padding--x4"
          style={{ backgroundColor: "#eae7eda1" }}
        >
          <img
            src={shoes}
            alt="posing with painting of shoes"
            class="u-width--33  u-height--auto  u-margin--r4  _margin--negative--75px"
          />
          <div class="u-padding--l8  u-width--33">
            <div
              class="u-size--5  u-size--2@md  u-black  u-weight--300"
              style={{ backgroundColor: "white" }}
            >
              Photorealistic
            </div>
            <div class="u-size--7  u-size--5@md  u-black  u-weight--700">
              Specilized in photorealism
            </div>
          </div>
          <img src={blob1} class="" />
        </div>
        <div
          class="u-bg--white  u-flex  u-flex--column  u-flex--row@md  u-flex--justify--center  u-padding--x4"
          style={{ paddingTop: "200px" }}
        >
          <div>
            <div class="u-size--5  u-size--2@md  u-black  u-weight--500">
              "It's all in the details"
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

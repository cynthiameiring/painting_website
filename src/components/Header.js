import React, { Component } from "react";
import headerImageLarge from "../media/HeaderImage.jpg";

import { connect } from "react-redux";

export default class Header extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div class="u-relative">
        <div class="u-absolute  _top--15  u-width--100  u-height--100  u-z--1  u-padding--l3  u-padding--l0@lg">
          <div class="o-grid  o-grid--fixed  u-width--100">
            <div class="o-grid__row">
              <div class="o-grid__col  o-grid__col--6@xs">
                <h1 class="u-size--7  u-size--4@sm  u-size--3@md  u-size--2@lg  u-size--1@xl">
                  Photorealistic <br /> artworks
                </h1>
                <p class="u-size--9  u-size--8@sm  u-size--7@md  u-size--6@lg  u-lh--5">
                  by Cynthia Meiring
                </p>
              </div>
            </div>
          </div>
        </div>
        <picture>
          {/* <source media="(min-width: 990px)" srcset={headerImageLarge} /> */}
          {/* <source media="(min-width: 550px)" srcset={headerImageSmall} /> */}
          <source media="(min-width: 0px)" srcset={headerImageLarge} />
          <img
            srcset={{ headerImageSmall }}
            alt="header image"
            class="u-width--100  u-block  v-clip--header  u-z--0"
          />
        </picture>
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

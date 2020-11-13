import React, { Component } from "react";
import headerImageLarge from "../media/HeaderImageLarge.jpg";
import headerImageMedium from "../media/HeaderImageMedium.jpg";
import headerImageSmall from "../media/HeaderImageSmall.jpg";

import { headerImageLoaded } from "../actions/menu";

import { connect } from "react-redux";
import Fade from "react-reveal/Fade";

class Header extends Component {
  state = { loaded: false };

  componentDidMount() {}

  render() {
    return (
      <div className="u-relative  u-padding--b5@md">
        <div className="u-absolute  _top--15  u-width--100  u-z--1  u-padding--l3  u-padding--l0@lg">
          <div className="o-grid  o-grid--fixed  u-width--100">
            <div className="o-grid__row">
              <div className="o-grid__col  o-grid__col--6@xs">
                {this.state.loaded ? (
                  <Fade left>
                    <h1 className="u-size--6  u-size--4@sm  u-size--3@md  u-size--2@lg  u-size--1@xl  u-weight--600">
                      Contemporary <br /> realism
                    </h1>
                    {/* <p className="_font-size--header-home  u-weight--300  u-lh--5  u-ff--aurore">
                      by Cynthia Meiring
                    </p> */}
                  </Fade>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <picture>
          <source media="(min-width: 1240px)" srcSet={headerImageLarge} />
          <source media="(min-width: 990px)" srcSet={headerImageMedium} />
          <source media="(min-width: 0px)" srcSet={headerImageSmall} />
          <img
            srcSet={headerImageMedium}
            alt="header"
            className="u-width--100  u-block  v-clip--header  u-z--0"
            onLoad={() => {
              setTimeout(() => {
                this.setState({ loaded: true });
                this.props.headerImageLoaded(true);
              }, 500);
            }}
          />
        </picture>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     headerImagedLoaded: state.loaded,
//   };
// };

export default connect(null, {
  headerImageLoaded,
})(Header);

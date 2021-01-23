import React, { Component } from "react";
import headerImageLarge from "../media/HeaderImageLarge.jpg";
import headerImageMedium from "../media/HeaderImageMedium.jpg";
import headerImageSmall from "../media/HeaderImageSmall.jpg";
import headerImageMobile from "../media/HeaderImageMobile.jpg";
import { headerImageLoaded } from "../actions/menu";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
// import logo from "../media/LogoBlack.png";
// import { Link } from "react-router-dom";

class Header extends Component {
  state = { loaded: true };

  componentDidMount() {}

  render() {
    return (
      <div className="u-relative  u-padding--b5@md">
        <div className="u-hidden  u-block@sm  u-absolute  _top--15  u-width--100  u-z--1  u-padding--l3  u-padding--l0@lg">
          <div className="o-grid  o-grid--fixed  u-width--100">
            <div className="o-grid__row">
              <div className="o-grid__col  o-grid__col--6@xs">
                {this.state.loaded ? (
                  <div>
                    {/* <Fade left> */}
                    <h1 className="u-size--6  u-size--4@sm  u-size--3@md  u-size--2@lg  u-size--1@xl  u-weight--600  u-padding--l6@sm">
                      Contemporary <br /> realism
                    </h1>
                    <p className="u-hidden  u-block@lg  _font-size--header-home  u-weight--300  u-lh--5  u-padding--l6@sm  u-padding--t3">
                      by Cynthia Meiring
                    </p>
                    {/* </Fade> */}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="u-hidden@sm  u-flex  u-flex--justify--center  u-padding--b5">
          <div className="u-flex">
            <img
              src={logo}
              className="u-margin--r4"
              style={{ height: "80px" }}
              alt="logo"
            />
            <p className="u-size--5">
              CYNTHIA <br />
              MEIRING
            </p>
          </div>
        </div> */}
        <picture>
          <source media="(min-width: 1240px)" srcSet={headerImageLarge} />
          <source media="(min-width: 990px)" srcSet={headerImageMedium} />
          <source media="(min-width: 550px)" srcSet={headerImageSmall} />
          <source media="(min-width: 0px)" srcSet={headerImageMobile} />
          <img
            srcSet={headerImageSmall}
            alt="header"
            className="u-width--100  u-block  u-z--0"
            // onLoad={() => {
            //   setTimeout(() => {
            //     this.setState({ loaded: true });
            //     this.props.headerImageLoaded(true);
            //   }, 500);
            // }}
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

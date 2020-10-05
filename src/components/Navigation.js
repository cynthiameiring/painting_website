import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../media/LogoBlack.png";
import HamburgerMenu from "react-hamburger-menu";

import { toggleMenu } from "../actions/menu";

class Navigation extends Component {
  state = {
    menuItems: ["Gallery", "About", "Process", "Contact"],
    menuOpen: false,
  };

  handleClick() {
    this.props.toggleMenu(!this.state.menuOpen);
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  render() {
    return (
      <header className="u-width--100">
        {/* Desktop view */}
        <div className="u-hidden  u-flex@md  u-padding--l5  u-padding--y3  u-padding--r6">
          <img src={logo} style={{ height: "120px" }} alt="logo" />

          <nav className="u-margin--l-auto" data-component="navigation--main">
            <ol className="o-list-reset  u-flex  u-flex--row">
              {this.state.menuItems.map((item) => (
                <li
                  className="o-list-reset__item"
                  data-component="navigation--main-item"
                >
                  <a
                    className="u-margin--l7  u-padding--t4  u-inline-block  u-no-decoration  u-size--6  u-black  u-weight--500  has-hover-propagation  v-border--nav"
                    href={"/" + item}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {/* Mobile view */}
        <div className="u-hidden@md  u-width--100  u-height--100">
          <img
            className="u-padding--2"
            src={logo}
            style={{ height: "100px" }}
            alt="logo"
          />
          <a
            className="u-flex  u-absolute  u-right--0  u-top--0  z-index--hamburger  u-flex--items--center  u-flex--justify--end  u-padding--6  u-pointer"
            onClick={this.handleClick.bind(this)}
          >
            <HamburgerMenu
              isOpen={this.state.menuOpen}
              // menuClicked={this.handleClick.bind(this)}
              width={18}
              height={15}
              strokeWidth={2}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
            <span className="u-size--5  u-black  u-weight--700  u-margin--l3">
              {this.state.menuOpen ? "Close" : "Menu"}
            </span>
          </a>
          <nav
            className={
              "c-menu--mobile  u-absolute  u-right--0  u-top--0" +
              (this.state.menuOpen ? "  open" : "")
            }
          >
            <ol className="o-list-reset">
              {this.state.menuItems.map((item) => (
                <li
                  className="o-list-reset__item"
                  data-component="navigation--main-item"
                >
                  <a
                    className="u-padding--y2  u-inline-block  u-no-decoration  u-size--5  u-black  u-weight--700  has-hover-propagation"
                    href={"/" + item}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menuOpen: state.menuOpen,
  };
};

export default connect(mapStateToProps, {
  toggleMenu,
})(Navigation);

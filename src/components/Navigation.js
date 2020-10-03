import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../media/LogoBlack.png";
import HamburgerMenu from "react-hamburger-menu";

import { toggleMenu } from "../actions/menu";

class Header extends Component {
  state = {
    menuItems: ["Gallery", "About", "Process", "Contact"],
    menuOpen: false,
  };

  handleClick() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  render() {
    return (
      <header class="u-width--100">
        {/* Desktop view */}
        <div class="u-hidden  u-flex@lg  u-padding--t5  u-padding--l5  u-padding--b3  u-padding--r6">
          <img src={logo} style={{ height: "120px" }} alt="logo" />

          <nav class="u-margin--l-auto" data-component="navigation--main">
            <ol class="o-list-reset  u-flex  u-flex--row">
              {this.state.menuItems.map((item) => (
                <li
                  class="o-list-reset__item"
                  data-component="navigation--main-item"
                >
                  <a
                    class="u-margin--l7  u-padding--t4  u-inline-block  u-no-decoration  u-size--5  u-black  u-weight--500  has-hover-propagation  v-border--nav"
                    href=""
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {/* Mobile view */}
        <div class="u-hidden@lg  u-width--100  u-height--100">
          <img
            class="u-padding--2"
            src={logo}
            style={{ height: "100px" }}
            alt="logo"
          />
          <div class="u-flex  u-absolute  u-right--0  u-top--0  z-index--hamburger  u-flex--items--center  u-flex--justify--end  u-padding--6">
            <HamburgerMenu
              isOpen={this.state.menuOpen}
              menuClicked={this.handleClick.bind(this)}
              width={18}
              height={15}
              strokeWidth={2}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
            <span class="u-size--5  u-black  u-weight--700  u-margin--l3">
              {this.state.menuOpen ? "Close" : "Menu"}
            </span>
          </div>
          <nav
            class={
              "c-menu--mobile  u-absolute  u-right--0  u-top--0" +
              (this.state.menuOpen ? "  open" : "")
            }
          >
            <ol class="o-list-reset">
              {this.state.menuItems.map((item) => (
                <li
                  class="o-list-reset__item"
                  data-component="navigation--main-item"
                >
                  <a
                    class="u-padding--y2  u-inline-block  u-no-decoration  u-size--5  u-black  u-weight--700  has-hover-propagation"
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
})(Header);

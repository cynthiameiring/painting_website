import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../media/Logo-black.png";
import HamburgerMenu from "react-hamburger-menu";

import { toggleMenu } from "../actions/menu";

class Header extends Component {
  state = {
    menuItems: ["Store", "About", "Process", "Contact"],
    menuOpen: false,
  };

  handleClick() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  render() {
    return (
      <header class="u-width--100  u-fixed  u-bg--white  ">
        {/* Desktop view */}
        <div class="o-grid  o-grid--fixed">
          <div class="o-grid__row  u-hidden  u-block@lg  u-width--100">
            <div class="o-grid__col  o-grid__col--12@xs  u-flex">
              <img src={logo} style={{ height: "150px" }} alt="logo" />

              <nav class="u-margin--l-auto" data-component="navigation--main">
                <ol class="o-list-reset  u-flex  u-flex--row">
                  {this.state.menuItems.map((item) => (
                    <li
                      class="o-list-reset__item"
                      data-component="navigation--main-item"
                    >
                      <a
                        class="u-margin--l5  u-padding--t4  u-inline-block  u-no-decoration  u-size--5  u-black  u-weight--700  has-hover-propagation  v-border--nav"
                        href=""
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div class="u-hidden@lg  u-width--100  u-height--100">
          <div class="u-flex  u-absolute  u-right--0  u-top--0  z-index--hamburger  u-flex--items--center  u-flex--justify--end  u-padding--t4  u-padding--x4">
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
              this.state.menuOpen
                ? "c-menu--mobile  u-padding--y3  open"
                : "c-menu--mobile  u-padding--y3"
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

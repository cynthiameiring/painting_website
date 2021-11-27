import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../media/LogoBlack.png";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toggleMenu } from "../actions/menu";

class Navigation extends Component {
  state = {
    menuItems: ["Artworks", "About", "Process", "Contact"],
    menuOpen: false,
    activePage: "",
  };

  handleClick() {
    this.props.toggleMenu(!this.state.menuOpen);
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  render() {
    return (
      <header className="u-width--100  u-sticky  u-sticky--safari  u-relative@md  u-top--0  u-bg--white--white-smoke  z-index--hamburger">
        {/* Desktop view */}
        <div className="u-hidden  u-flex@lg  u-padding--l5  u-padding--y4  u-padding--r8">
          <Link to="/">
            <img src={logo} style={{ height: "60px" }} alt="logo" />
          </Link>

          <nav
            className="u-margin--l-auto  u-flex  u-flex--items--center"
            data-component="navigation--main"
          >
            <ol className="o-list-reset  u-flex  u-flex--row">
              {this.state.menuItems.map((item, index) => (
                <li
                  className="o-list-reset__item"
                  data-component="navigation--main-item"
                  key={index}
                >
                  <NavLink
                    activeClassName="v-border--nav--active"
                    className="u-margin--l7  u-inline-block  u-no-decoration  u-size--6  u-black  u-weight--600  has-hover-propagation  v-border--nav"
                    to={"/" + item.toLowerCase()}
                    onClick={() =>
                      this.setState({ activePage: item.toLowerCase() })
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {/* Mobile view */}
        <div className="u-hidden@lg  u-width--100  u-height--100  ">
          <div className="u-flex  u-hidden@lg  u-padding--4">
            <Link to="/" className="u-no-decoration  u-flex">
              <img
                src={logo}
                className="u-margin--r4  _height--logo"
                alt="logo"
              />
              {/*<span*/}
              {/*  className="u-size--8  u-size--7@md  u-flex--inline  u-flex--items--center  u-weight--400  u-black"*/}
              {/*  style={{ letterSpacing: "4px" }}*/}
              {/*>*/}
              {/*  CYNTHIA <br />*/}
              {/*  MEIRING*/}
              {/*</span>*/}
            </Link>
          </div>

          <div
            className="u-flex  u-absolute  u-right--0  u-top--0  z-index--hamburger  u-flex--items--center  u-flex--justify--end  u-padding--5  u-pointer"
            onClick={() => this.handleClick()}
          >
            <HamburgerMenu
              isOpen={this.state.menuOpen}
              menuClicked={() => {}}
              width={18}
              height={15}
              strokeWidth={2}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
            <span className="u-size--6@xs  u-size--5@sm  u-black  u-weight--700  u-margin--l3">
              {this.state.menuOpen ? "Close" : "Menu"}
            </span>
          </div>
          <nav
            className={
              "c-menu--mobile  u-absolute  u-right--0  u-top--0" +
              (this.state.menuOpen ? "  open" : "")
            }
          >
            <ol className="o-list-reset">
              {this.state.menuItems.map((item, index) => (
                <li
                  className="o-list-reset__item"
                  data-component="navigation--main-item"
                  key={index}
                >
                  <Link
                    to={"/" + item.toLocaleLowerCase()}
                    className="u-padding--y2  u-inline-block  u-no-decoration  u-size--7  u-size--6@sm  u-size--5@md  u-black u-weight--700 has-hover-propagation"
                    onClick={() => this.handleClick()}
                  >
                    {item}
                  </Link>
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

import React, { Component } from "react";
import { connect } from "react-redux";
import banner from "../media/header-crop.jpg";
import logo from "../media/Logo.png";
import hamburger from "../media/hamburger.svg";
import { toggleMenu } from "../actions/menu";

class Header extends Component {
  handleClick = () => {
    this.props.toggleMenu(!this.props.menuOpen);
  };

  render() {
    return (
      <header>
        <img
          src={banner}
          alt="banner"
          className="banner-img"
          onLoad={this.onLoad}
        ></img>

        <img className="logo" src={logo} alt="logo"></img>

        <div className="menu-light">
          <h3 className="menu-item">STORE</h3>
          <h3 className="menu-item">PROCESS</h3>
          <h3 className="menu-item">ABOUT</h3>
          <h3 className="menu-item">CONTACT</h3>
        </div>
        <button className="hamburger-btn" onClick={this.handleClick}>
          <img src={hamburger}></img>
        </button>
        <div
          className={this.props.menuOpen ? "pullout-menu-show" : "pullout-menu"}
        >
          <div>
            <h3 className="menu-item">STORE</h3>
            <h3 className="menu-item">PROCESS</h3>
            <h3 className="menu-item">ABOUT</h3>
            <h3 className="menu-item">CONTACT</h3>
          </div>
        </div>

        <div className="title">
          <h1>CYNTHIA MEIRING</h1>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuOpen: state.menuOpen
  };
};

export default connect(mapStateToProps, {
  toggleMenu
})(Header);

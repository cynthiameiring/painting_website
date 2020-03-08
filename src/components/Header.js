import React, { Component } from "react";
import banner from "../media/header-crop.jpg";
import logo from "../media/Logo.png";
import hamburger from "../media/hamburger.svg";

export default class Header extends Component {
  render() {
    return (
      <header>
        <img
          src={banner}
          alt="banner"
          className="banner"
          onLoad={this.onLoad}
        ></img>

        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>

        <div className="menu-light">
          <h3 className="menu-item">STORE</h3>
          <h3 className="menu-item">PROCESS</h3>
          <h3 className="menu-item">ABOUT</h3>
          <h3 className="menu-item">CONTACT</h3>
        </div>
        <div className="hamburger-container">
          <button className="hamburger-btn">
            <img src={hamburger}></img>
          </button>
        </div>

        <div className="title">
          <h1>CYNTHIA MEIRING</h1>
        </div>
      </header>
    );
  }
}

import React, { Component } from "react";

export default class ButtonText extends Component {
  componentDidMount() {}

  render() {
    return (
      //   <a
      //     onClick={this.props.handleClick}
      //     className="u-bg--yellow--tulip-tree  o-button  u-box-shadow--1  u-padding--x5  u-padding--y3  u-lh--2  u-size--8  u-bw--0  u-br--1"
      //   >
      //     {this.props.text}
      //   </a>

      <div
        className="button"
        id="button-3"
        // className="u-bg--yellow--tulip-tree  o-button  u-box-shadow--1  u-padding--x5  u-padding--y3  u-lh--2  u-size--8  u-bw--0  u-br--1"
      >
        <div id="circle"></div>
        <a
          onClick={this.props.handleClick}
          href={this.props.src}
          className="u-black  u-no-decoration"
          target={this.props.newTab ? "_blank" : "_self"}
        >
          {this.props.text}
        </a>
      </div>
    );
  }
}
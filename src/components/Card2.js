import React, { Component } from "react";

export default class Card extends Component {
  handleClick = () => {
    console.log("jajaja");
  };

  componentDidMount() {}

  render() {
    return (
      <div className="u-bg--white  u-bw--3  u-bs--solid  u-bc--black  u-height--100">
        {/* <img
          src={shoes}
          alt="Posing with shoe painting"
          className="u-width--100"
        />
        <p className="u-weight--300  u-size--9  u-size--8@sm  u-margin--b5  u-margin-b6@sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus
          libero ut magna placerat, ut auctor dui malesuada.
        </p>
        <ButtonText text="Go to gallery" handleClick={this.handleClick} /> */}
      </div>
    );
  }
}

import React, { Component } from "react";
import blob1 from "../media/svg/blob1.svg";
import ButtonText from "./ButtonText";

import { connect } from "react-redux";

export default class Card extends Component {
  handleClick = () => {
    console.log("jajaja");
  };

  componentDidMount() {}

  render() {
    return (
      // <article className="u-bg--white  u-height--100  u-hover--box-shadow--1  v-transform--grow">
      <article className="u-bg--white  u-height--100">
        <div
          className="u-padding--3  u-flex  u-flex--column  u-box-shadow-hover--4@xl  u-flex--items--center"
          // style={{ height: "60%" }}
        >
          <h2
            className="u-padding--y4
            u-size--4  u-lh--2"
          >
            {this.props.title}
          </h2>

          <img
            src={this.props.image}
            alt="Posing with shoe painting"
            className="u-height--100  u-width--100"
            style={{ objectFit: "cover", minHeight: "300px" }}
          />
          <p className="u-weight--300  u-size--9  u-size--8@sm  u-margin--y5  u-margin-y6@sm  u-text--center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <ButtonText text="Go to gallery" handleClick={this.handleClick} />
        </div>
      </article>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     menuOpen: state.menuOpen,
//   };
// };

// export default connect(mapStateToProps, {})(Home);

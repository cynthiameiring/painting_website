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
      <article className="u-bg--white  u-height--100  u-hover--box-shadow--1  v-transform--grow  has-hover-propagation">
        <a className="has-hover-propagation">
          {/* <article className="u-bg--white  u-height--100"> */}
          <div
            className="u-padding--4@sm  u-flex  u-flex--column  u-box-shadow-hover--4@xl  u-flex--items--center  has-hover-propagation"
            // style={{ height: "60%" }}
          >
            <img
              src={this.props.image}
              alt="Posing with shoe painting"
              className="u-height--100  u-width--100"
              // style={{ objectFit: "cover", minHeight: "300px" }}
            />
            <h2 className="u-margin--y4  u-size--6  u-size--5@md  u-lh--2">
              {this.props.title}
            </h2>
            <p className="u-weight--300  u-size--9  u-size--8@md  u-margin--b5  u-margin-y6@sm  u-text--center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ButtonText
              text="Go to gallery"
              handleClick={this.handleClick}
              hoverPropagate={true}
            />
          </div>
        </a>
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

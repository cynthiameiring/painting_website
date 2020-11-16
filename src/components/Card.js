import React, { Component } from "react";
import blob1 from "../media/svg/blob1.svg";
import ButtonText from "./ButtonText";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export default class Card2 extends Component {
  componentDidMount() {}

  render() {
    return (
      <article className="u-bg--white  u-height--100  u-hover--box-shadow--1  v-transform--grow  has-hover-propagation">
        <Link
          className="has-hover-propagation  u-no-decoration  u-black"
          to={this.props.url}
        >
          {/* <article className="u-bg--white  u-height--100"> */}
          <div
            className="u-padding--4@sm  u-flex  u-flex--column  u-box-shadow-hover--4@xl  u-flex--items--center  has-hover-propagation"
            // style={{ height: "60%" }}
          >
            {this.props.videoUrl ? (
              <video
                autoPlay
                muted
                loop
                className="u-height--100  u-width--100"
              >
                <source src={this.props.videoUrl} type="video/mp4" />
              </video>
            ) : (
              <img
                src={this.props.image}
                alt="Posing with shoe painting"
                className="u-height--100  u-width--100"
                // style={{ objectFit: "cover", minHeight: "300px" }}
              />
            )}

            <h2 className="u-margin--y4  u-size--6  u-size--5@md  u-lh--2">
              {this.props.title}
            </h2>
            <p className="u-weight--300  u-size--9  u-size--8@md  u-margin--b5  u-margin-y6@sm  u-text--center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ButtonText text="Go to gallery" />
          </div>
        </Link>
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

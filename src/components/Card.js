import React, { Component } from "react";
import ButtonText from "./ButtonText";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Card extends Component {
  componentDidMount() {}

  render() {
    console.log(this.props.breakpoint);
    return (
      <article className="u-height--100  u-hover--box-shadow--1@sm  v-transform--grow@sm  has-hover-propagation">
        <Link
          className="has-hover-propagation  u-no-decoration  u-black"
          to={this.props.url}
        >
          <div className="u-padding--4@sm  u-flex  u-flex--column  u-box-shadow-hover--4@xl  u-flex--items--center  has-hover-propagation  u-bg--black  u-bg--white--white-smoke@sm">
            <div className="u-flex">
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
                  className="u-height--100  u-width--100  v-overlay--image"
                  // style={{ objectFit: "cover", minHeight: "300px" }}
                />
              )}
            </div>

            <h2 className="u-padding--y4  u-size--6  u-size--5@md  u-lh--2  u-absolute  u-position--50  u-relative@sm  u-white  u-black@sm">
              {this.props.title}
            </h2>
            <div className="u-hidden u-block@sm  u-text--center">
              <TextTruncate
                line={
                  this.props.breakpoint === "xs"
                    ? 3
                    : this.props.breakpoint === "sm" ||
                      this.props.breakpoint === "md"
                    ? 4
                    : 5
                }
                truncateText=" …"
                text={this.props.teaserText}
                containerClassName="u-weight--200  u-size--9  u-size--8@md  u-margin--b5  u-margin-y6@sm  u-text--center"
              />
              <div className="u-hidden u-inline-block@sm ">
                <ButtonText
                  text={this.props.buttonText}
                  hoverpropagation={true}
                />
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    breakpoint: state.breakpoint,
  };
};

export default connect(mapStateToProps, {})(Card);

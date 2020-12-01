import React, { Component } from "react";
import ButtonText from "./ButtonText";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Card extends Component {
  componentDidMount() {}

  render() {
    return (
      <article className="u-height--100  u-hover--box-shadow--1  v-transform--grow  has-hover-propagation">
        <Link
          className="has-hover-propagation  u-no-decoration  u-black"
          to={this.props.url}
        >
          <div className="u-padding--4@sm  u-flex  u-flex--column  u-box-shadow-hover--4@xl  u-flex--items--center  has-hover-propagation">
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

            <TextTruncate
              line={this.props.breakpoint === "xs" ? 3 : 6}
              truncateText="…"
              text={this.props.teaserText}
              containerClassName="u-weight--200  u-size--9  u-size--8@md  u-margin--b5  u-margin-y6@sm  u-text--center"
            />

            <ButtonText text={this.props.buttonText} hoverpropagation={true} />
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

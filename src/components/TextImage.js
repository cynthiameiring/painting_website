import React, { Component } from "react";
import ButtonText from "./ButtonText";
import TextTruncate from "react-text-truncate";

import { connect } from "react-redux";

function TextImage(props) {
  let imagePos = "";
  let textPos = "";
  if (props.imagePosition === "right") {
    imagePos = "u-order--2";
    textPos = "u-order--1  u-padding--r7@md";
  } else {
    imagePos = "u-order--2  u-order--1@sm";
    textPos = "u-order--2@sm u-padding--l7@md";
  }

  return (
    <div className="u-padding--y5  u-padding--y7@sm  u-padding--y8@lg">
      <div className="o-grid  o-grid--fixed  u-width--100">
        <div className="o-grid__row  u-flex">
          <div
            className={`o-grid__col  o-grid__col--12@xs  o-grid__col--6@sm  ${imagePos}`}
          >
            <div className="u-relative  u-width--100">
              {props.videoUrl ? (
                <video
                  autoPlay
                  muted
                  loop
                  className="u-height--100  u-width--100"
                >
                  <source src={props.videoUrl} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={props.image}
                  alt="Posing with shoe painting"
                  className="u-height--100  u-width--100"
                />
              )}
            </div>
          </div>
          <div
            className={`o-grid__col  o-grid__col--12@xs  o-grid__col--6@sm  ${textPos}  u-flex  u-flex--items--center  u-flex--justify--center`}
          >
            <div className="u-padding--b5">
              <h2 className="u-margin--b4  u-margin--b6@md  u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  u-lh--2  v-rectangle  v-rectangle--mobile">
                {props.title}
              </h2>
              <TextTruncate
                line={
                  props.breakpoint === "sm" || props.breakpoint === "md"
                    ? 5
                    : 10
                }
                truncateText="…"
                text={props.text}
                containerClassName="u-weight--200  u-size--9  u-size--8@md  u-margin--b6"
              />
              <ButtonText text={props.buttonText} src={props.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    breakpoint: state.breakpoint,
  };
};

export default connect(mapStateToProps, {})(TextImage);

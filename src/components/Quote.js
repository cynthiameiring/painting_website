import React, { Component } from "react";

export default class Quote extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100">
        <div className="o-grid__row  u-flex">
          <div className="o-grid__col  o-grid__col--12@xs  u flex">
            <p className="u-padding--y8  u-size--1  u-italic  u-weight--200  u-text--center">
              "It's all in the details"
            </p>
          </div>
        </div>
      </div>
    );
  }
}

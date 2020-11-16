import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class IntroContentPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="o-grid__row">
        <div className="o-grid__col  o-grid__col--12@xs  u-flex  u-flex--column  u-flex--items--center">
          <h2 className="u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  u-lh--2">
            {this.props.title}
          </h2>
          <hr className="v-rectangle--middle" />
          <p className="u-margin--b6  u-weight--200  u-size--9  u-size--8@md  u-text--center">
            {this.props.intro}
          </p>
        </div>
      </div>
    );
  }
}

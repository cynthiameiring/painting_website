import React, { Component } from "react";

export default class IntroContentPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="o-grid__row  u-margin--b8">
        <div className="o-grid__col  o-grid__col--12@xs  u-flex  u-flex--column  u-flex--items--center">
          <h2 className="u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  u-lh--2  u-margin--b3">
            {this.props.title}
          </h2>
          <p className="u-weight--200  u-size--9  u-size--8@md  u-text--center">
            {this.props.intro}
          </p>
        </div>
      </div>
    );
  }
}
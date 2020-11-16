import React, { Component } from "react";

import TextImage from "../components/TextImage";

export default class About extends Component {
  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y5  u-padding--y7@sm  u-padding--y8@lg">
        <div className="o-grid__row  u-flex">
          <div className="o-grid__col  o-grid__col--12@xs  u-flex  u-flex--column  u-flex--items--center">
            <h2 className="u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  u-lh--2">
              About Cynthia
            </h2>
            <hr className="v-rectangle--middle" />
            <p class="u-margin--b6  u-weight--200  u-size--9  u-size--8@md  u-text--center">
              Stukje tekst nog schrijven
            </p>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Card from "./Card";
import shoes from "../media/shoe-cropped.jpg";
import blob1 from "../media/svg/blob1.svg";
import ButtonText from "./ButtonText";

import { connect } from "react-redux";

export default class CardContainer extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="u-padding--y7  u-bg--white--white-smoke">
        <div className="o-grid  o-grid--fixed  u-width--100">
          <div className="o-grid__row  u-flex">
            <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@md  o-grid__col--4@lg  u-hidden  u-block@lg">
              <Card />
            </div>
            <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@md  o-grid__col--4@lg">
              <Card />
            </div>
            <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@md  o-grid__col--4@lg">
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     menuOpen: state.menuOpen,
//   };
// };

// export default connect(mapStateToProps, {})(Home);

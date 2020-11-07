import React, { Component } from "react";
import Card from "./Card";
import Card2 from "./Card2";

import shoes from "../media/shoe-cropped.jpg";
import video from "../media/video.jpg";
import blob1 from "../media/svg/blob1.svg";
import ButtonText from "./ButtonText";

import { connect } from "react-redux";

export default class CardContainer extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="u-padding--y8  u-relative">
        {/* <div className="_background-card"> */}
        <div className="o-grid  o-grid--fixed  u-width--100  u-z--1  u-relative">
          <div className="o-grid__row  u-flex">
            <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@sm  o-grid__col--4@lg">
              <Card image={shoes} title="Process" />
            </div>
            <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@sm  o-grid__col--4@lg">
              <Card image={video} title="Contact" />
            </div>
            <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@sm  o-grid__col--4@lg">
              <Card image={shoes} title="About" />
            </div>
            {/* <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@sm  o-grid__col--3@lg">
                <Card2 />
              </div> */}
          </div>
        </div>
        {/* </div> */}
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

import React, { Component } from "react";
import Card from "./Card";

import shoes from "../media/shoe.jpg";
import video from "../media/video.jpg";

export default class CardContainer extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="u-padding--y8  u-relative">
        <div className="o-grid  o-grid--fixed  u-width--100  u-z--1  u-relative">
          <div className="o-grid__row  u-flex">
            <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@md  o-grid__col--4@lg">
              <Card image={shoes} title="Process" />
            </div>
            <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@md  o-grid__col--4@lg">
              <Card image={video} title="Contact" />
            </div>
            <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@md  o-grid__col--4@lg">
              <Card image={shoes} title="About" />
            </div>
            <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@md  o-grid__col--4@lg">
              <Card image={shoes} title="About" />
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

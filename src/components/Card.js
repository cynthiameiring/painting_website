import React, { Component } from "react";
import shoes from "../media/shoe-cropped.jpg";
import blob1 from "../media/svg/blob1.svg";
import ButtonText from "./ButtonText";

import { connect } from "react-redux";

export default class Card extends Component {
  handleClick = () => {
    console.log("jajaja");
  };

  componentDidMount() {}

  render() {
    return (
      <div className="u-bg--white  u-padding--b7  u-padding--x4@md">
        <h2 className="u-margin--b5  u-size--6  u-size--5@md  u-size--4@lg  u-size--3@xl  u-weight--600  u-lh--2  v-rectangle  v-rectangle--mobile">
          Gallery
        </h2>
        <p className="u-weight--300  u-size--9  u-size--8@sm  u-margin--b5  u-margin-b6@sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus
          libero ut magna placerat, ut auctor dui malesuada. Duis lobortis odio
          metus, nec placerat metus congue id. Ut id magna orci.
        </p>
        <ButtonText text="Go to gallery" handleClick={this.handleClick} />
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

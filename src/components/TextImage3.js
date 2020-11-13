import React, { Component } from "react";
import shoes from "../media/shoe.jpg";
import ButtonText from "./ButtonText";

export default class TextImage3 extends Component {
  handleClick = () => {
    console.log("jajaja");
  };

  componentDidMount() {}

  render() {
    return (
      <div className="u-padding--y4  u-padding--y6@md  u-padding--y8@lg">
        <div className="o-grid  o-grid--fixed  u-width--100">
          <div className="o-grid__row  u-flex">
            <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@sm  u-flex  u-flex--items--center">
              <div className="u-padding--b7  u-padding--r7  u-flex  u-flex--column  ">
                <h2 className="u-margin--b6  u-size--6  u-size--5@md  u-size--4@lg  u-size--3@xl  u-weight--600  u-lh--2  v-rectangle  v-rectangle--mobile">
                  Gallery
                </h2>
                <p className="u-weight--200  u-size--9  u-size--8@sm  u-margin--b6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  tempus libero ut magna placerat, ut auctor dui malesuada. Duis
                  lobortis odio metus, nec placerat metus congue id. Ut id magna
                  orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Etiam tempus libero ut magna placerat, ut auctor dui
                  malesuada. Duis lobortis odio metus, nec placerat metus congue
                  id. Ut id magna orci.
                </p>
                <ButtonText text="See details" handleClick={this.handleClick} />
              </div>
            </div>
            <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@sm">
              <div className="u-relative  u-width--100">
                <img
                  src={shoes}
                  alt="Posing with shoe painting"
                  className="u-relative  u-width--100  u-block"
                />
              </div>
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

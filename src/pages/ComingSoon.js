import React, { Component } from "react";
import ButtonText from "../components/ButtonText";
import TextImage from "../components/TextImage";
import Guitar from "../media/Guitar-finished-resized.jpeg";
import TextTruncate from "react-text-truncate";
import { connect } from "react-redux";

function ComingSoon(props) {
  let imagePos = "";
  let textPos = "";
  if (props.imagePosition === "right") {
    imagePos = "u-order--2  u-order--1@md";
    textPos = "u-padding--r5@md  u-padding--l6@lg";
  } else {
    textPos = "u-padding--l5@md  u-padding--l6@lg";
  }
  return (
    <div className="u-padding--y5  u-padding--y7@sm  u-padding--y8@xl">
      <div className="o-grid  o-grid--fixed  u-width--100">
        <div className="o-grid__row  u-flex">
          <div
            className={`o-grid__col  o-grid__col--12@xs  o-grid__col--6@sm  ${imagePos}`}
          >
            <div className="u-relative  u-width--100">
              <img
                src={Guitar}
                alt="Fado guitar finished"
                className="u-height--100  u-width--100"
              />
            </div>
          </div>
          <div
            className={`o-grid__col  o-grid__col--12@xs  o-grid__col--6@sm  ${textPos}  u-flex  u-flex--items--center  u-flex--justify--center`}
          >
            <div className="u-padding--b5">
              <h2 className="u-margin--y4  u-margin--t0@sm  u-margin--b6@md  u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  u-lh--2  v-rectangle  v-rectangle--mobile">
                Coming soon{" "}
              </h2>
              <p
                className="u-weight--200  u-size--9  u-size--8@md  u-margin--b6"
                style={{ letterSpacing: "1px" }}
              >
                Hold tight and stay tuned, because this website will be launched
                soon. Can't you wait to see which artworks are available or do
                you want to get in touch? Please send an email to:{" "}
                <a
                  href="mailto:hello@cynthiameiring.com"
                  className="u-black  u-no-decoration  u-weight--500"
                >
                  {" "}
                  hello@cynthiameiring.com
                </a>
                . Or check out Cynthia's instagram page by clicking on the
                button below.
              </p>
              <ButtonText
                text="Go to Instagram"
                src="https://www.instagram.com/cynthia_meiring_art/"
                newTab={true}
                externalLink={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div
    //   className="u-padding--b8  _margin--top--20vh"
    //   style={{
    //     height: "100%",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <div className="o-grid  o-grid--fixed  u-width--100">
    //     <div className="o-grid__row  u-flex">
    //       <div
    //         className={`o-grid__col  o-grid__col--12@xs  o-grid__col--6@md  u-padding--t4  ${imagePos}`}
    //       >
    //         <img
    //           src={Guitar}
    //           alt="Posing with shoe painting"
    //           className="u-relative  u-width--100  u-block"
    //         />
    //       </div>
    //       <div
    //         className={`o-grid__col  o-grid__col--12@xs  o-grid__col--6@md  u-flex  u-flex--items--center  u-flex--justify--center`}
    //       >
    //         <div className={`u-padding--t7  u-padding--t0@md  ${textPos}`}>
    //           <h2 className="u-margin--b6  u-size--6  u-size--5@md  u-size--4@lg  u-size--3@xl  u-weight--600  u-lh--2  v-rectangle  v-rectangle--mobile">
    //             Coming soon
    //           </h2>
    //           <p
    //             className="u-weight--200  u-size--9  u-size--8@sm  u-margin--b6"
    //             style={{ letterSpacing: "1px" }}
    //           >
    //             Hold tight and stay tuned, because this website will be
    //             launched soon. Can't you wait to see which artworks are
    //             available or do you want to get in touch? Please send an email
    //             to:{" "}
    //             <a
    //               href="mailto:hello@cynthiameiring.com"
    //               className="u-black  u-no-decoration  u-weight--500"
    //             >
    //               {" "}
    //               hello@cynthiameiring.com
    //             </a>
    //             . Or check out Cynthia's instagram account by pressing the
    //             button below.
    //           </p>
    //           <ButtonText
    //             text="Go to Instagram"
    //             src="https://www.instagram.com/cynthia_meiring_art/"
    //             handleClick={this.handleClick}
    //             newTab={true}
    //             externalLink={true}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

const mapStateToProps = (state) => {
  return {
    breakpoint: state.breakpoint,
  };
};

export default connect(mapStateToProps, {})(ComingSoon);

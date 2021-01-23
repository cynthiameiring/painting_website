import React, { Component } from "react";
import ButtonText from "./ButtonText";

export default class InstaWidget extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100">
        <div className="o-grid__row  u-flex">
          <div className="o-grid__col  o-grid__col--12@xs">
            <div className="u-flex  u-flex--column  u-flex--items--center">
              {/* <div className="u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  v-rectangle--middle">
                Instagram
              </div> */}
              <h2 className="u-margin--b5  u-margin--b6@xl  u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  u-lh--2  v-rectangle--middle">
                Instagram
              </h2>

              {/* <hr className="v-rectangle--middle  u-margin--b4  u-margin--b6@md" /> */}
              {/* <iframe
                onClick={(event) => event.preventDefault()}
                src="https://snapwidget.com/embed/879762"
                className="snapwidget-widget  u-margin--b6"
                allowtransparency="true"
                frameBorder="0"
                scrolling="no"
                style={{
                  border: "none",
                  overflow: "hidden",
                  width: "100%",
                  pointerEvents: "none",
                }}
              ></iframe> */}

              <iframe
                title="my-insta"
                onClick={(event) => event.preventDefault()}
                src="//lightwidget.com/widgets/b45affad46bf5762b1ced40b7c14fb64.html"
                scrolling="no"
                allowtransparency="true"
                className="lightwidget-widget  u-hidden  u-block@sm"
                style={{
                  width: "100%",
                  border: "0",
                  overflow: "hidden",
                  marginBottom: "30px",
                }}
              ></iframe>
              <iframe
                title="my-insta"
                onClick={(event) => event.preventDefault()}
                src="//lightwidget.com/widgets/bf99e4c6af30586987c74686b5d3d4a3.html"
                scrolling="no"
                allowtransparency="true"
                className="lightwidget-widget  u-hidden@sm"
                style={{
                  width: "100%",
                  border: "0",
                  overflow: "hidden",
                  marginBottom: "30px",
                }}
              ></iframe>

              <ButtonText
                text="Go to Instagram"
                src="https://www.instagram.com/cynthia_meiring_art"
                externalLink={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import instagram from "../media/instagram.png";
import youtube from "../media/youtube.png";
import website from "../media/website.png";
import data from "../data.js";
import IntroContentPage from "../components/IntroContentPage";

export default class Contact extends Component {
  state = {
    contact: data.pages.find((p) => p.title === "Contact"),
  };
  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y5  u-padding--y7@sm  u-padding--y8@lg">
        {/* <IntroContentPage
          title={this.state.contact.title}
          intro={this.state.contact.teaserText}
        /> */}

        <div className="o-grid__row  u-margin--b4  u-margin--b6@sm  u-margin--b7@lg">
          <div className="o-grid__col  o-grid__col--12@xs  u-flex  u-flex--column  u-flex--items--center">
            <h2 className="u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  u-lh--2  u-margin--b4">
              {this.state.contact.title}
            </h2>
            <span className="u-weight--200  u-size--9  u-size--8@md  u-text--center">
              {this.state.contact.teaserText}
              <a
                className="u-black  u-no-decoration  u-weight--500"
                href="mailto:hello@cynthiameiring.com"
              >
                hello@cynthiameiring.com
              </a>
            </span>
          </div>
        </div>

        <div className="o-grid__row">
          <div className="o-grid__col  o-grid__col--12@xs  u-flex  u-flex--column  u-flex--items--center">
            {/* <p className="u-margin--b6  u-weight--200  u-size--9  u-size--8@md  u-text--center">
              {this.state.contact.teaserText}
              <a
                className="u-black  u-no-decoration  u-weight--500"
                href="mailto:hello@cynthiameiring.com"
              >
                hello@cynthiameiring.com
              </a>
            </p> */}
            <div>
              <span className="u-flex  u-flex--items--center  u-margin--b4">
                <img
                  className="u-margin--r4"
                  src={instagram}
                  alt=""
                  width="30"
                  height="30"
                />
                <a
                  className="u-block  u-weight--200  u-size--9  u-size--8@md  u-black  u-no-decoration"
                  href="https://www.instagram.com/cynthia_meiring_art"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cynthia_meiring_art
                </a>
              </span>

              <span className="u-flex  u-flex--items--center  u-margin--b4">
                <img
                  className="u-margin--r4"
                  src={youtube}
                  alt=""
                  width="30"
                  height="30"
                />
                <a
                  className="u-block  u-weight--200  u-size--9  u-size--8@md  u-black  u-no-decoration"
                  href="https://www.youtube.com/channel/UC7MrD_YgKrcwKgEYPHzOc-A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cynthia Meiring
                </a>
              </span>
              <span className="u-flex  u-flex--items--center  u-margin--b4">
                <img
                  className="u-margin--r4"
                  src={website}
                  alt=""
                  width="30"
                  height="30"
                />
                <a
                  className="u-block  u-weight--200  u-size--9  u-size--8@md  u-black  u-no-decoration"
                  href="https://www.cynthiameiring.com/"
                >
                  www.cynthiameiring.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

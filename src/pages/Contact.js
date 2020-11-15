import React, { Component } from "react";
import instagram from "../media/instagram.png";
import youtube from "../media/youtube.png";
import email from "../media/email.png";
import website from "../media/website.png";

import TextImage from "../components/TextImage";

export default class Contact extends Component {
  render() {
    return (
      <div className="u-padding--y5  u-padding--y7@sm  u-padding--y8@lg">
        <div className="o-grid  o-grid--fixed  u-width--100">
          <div className="o-grid__row  u-flex">
            <div className="o-grid__col  o-grid__col--12@xs  u-flex  u-flex--column  u-flex--items--center">
              <h2 className="u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  u-lh--2">
                Get in touch
              </h2>
              <hr className="v-rectangle--middle" />
              <p class="u-margin--b6  u-weight--200  u-size--9  u-size--8@md  u-text--center">
                For enquiries or questions, please send an email to:{" "}
                <a
                  className="u-black  u-no-decoration  u-weight--500"
                  href="mailto:hello@cynthiameiring.com"
                >
                  hello@cynthiameiring.com
                </a>
              </p>
              <div>
                <span className="u-flex  u-flex--items--center  u-margin--b4">
                  <img
                    className="u-margin--r4"
                    src={instagram}
                    width="30"
                    height="30"
                  />
                  <a
                    className="u-block  u-weight--200  u-size--9  u-size--8@md  u-black  u-no-decoration"
                    href="https://www.instagram.com/cynthia_meiring_art"
                    target="_blank"
                  >
                    cynthia_meiring_art
                  </a>
                </span>

                <span className="u-flex  u-flex--items--center  u-margin--b4">
                  <img
                    className="u-margin--r4"
                    src={youtube}
                    width="30"
                    height="30"
                  />
                  <a
                    className="u-block  u-weight--200  u-size--9  u-size--8@md  u-black  u-no-decoration"
                    href="https://www.youtube.com/channel/UC7MrD_YgKrcwKgEYPHzOc-A"
                    target="_blank"
                  >
                    Cynthia Meiring
                  </a>
                </span>
                <span className="u-flex  u-flex--items--center  u-margin--b4">
                  <img
                    className="u-margin--r4"
                    src={website}
                    width="30"
                    height="30"
                  />
                  <a
                    className="u-block  u-weight--200  u-size--9  u-size--8@md  u-black  u-no-decoration"
                    href="/"
                  >
                    www.cynthiameiring.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

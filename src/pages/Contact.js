import React, { Component } from "react";
import data from "../data.js";

export default class Contact extends Component {
  state = {
    contact: data.pages.find((p) => p.title === "Contact"),
    commissions: data.pages.find((p) => p.title === "Commissions"),
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y6  u-padding--y7@sm  u-padding--y8@lg">
        <div className="o-grid__row  u-margin--b5  u-margin--b6@sm  u-margin--b7@lg">
          <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--10@md  o-grid--offset--1@md  u-flex  u-flex--column  u-flex--items--center">
            <h2 className="h2-font  u-margin--b4">
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

        {/* <div className="o-grid__row  u-margin--b7  u-margin--b8@sm  u-margin--b9@lg">
          <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--10@md  o-grid--offset--1@md  o-grid__col--8@lg  o-grid--offset--2@lg  o-grid__col--6@xl  o-grid--offset--3@xl  u-flex  u-flex--column  u-flex--items--center">
            <ContactForm />
          </div>
        </div> */}

        <div className="o-grid__row  u-margin--b5  u-margin--b6@sm  u-margin--b7@lg">
          <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--10@md  o-grid--offset--1@md  u-flex  u-flex--column  u-flex--items--center">
            <h3 className="u-size--7  u-size--6@md  u-size--5@lg  u-weight--600  u-lh--2  u-margin--b4">
              Gallery
            </h3>
            <span className="u-weight--200  u-size--9  u-size--8@md  u-text--center  u-margin--b4">
              Since March 2022 I teamed up with Dutch Luxury Design. Some of my artworks are available {' '}
              <a className="u-black" href="https://dutchluxurydesign.com/en/our-artists/cynthia-meiring" target="_blank" rel="noopener noreferrer">through this gallery.</a>
              {' '}In October 2022 I'll take part in the group exhibition, so my work will be on display. If you would like to receive updates about this exhibition, you can {' '}
              <a className="u-black" href="/#newsletter-banner">sign up for my newsletter</a>.
            </span>
            <a className="u-black" href="https://dutchluxurydesign.com/en/our-artists/cynthia-meiring" target="_blank" rel="noopener noreferrer"><img alt="logo Dutch Luxury Design" style={{width:"300px"}} src="/media/Logo/Logo_DLD.jpg"/></a>
          </div>
        </div>

        <div className="o-grid__row  u-margin--b5  u-margin--b6@sm  u-margin--b7@lg">
          <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--10@md  o-grid--offset--1@md  u-flex  u-flex--column  u-flex--items--center">
            <h3 className="u-size--7  u-size--6@md  u-size--5@lg  u-weight--600  u-lh--2  u-margin--b4">
              {this.state.commissions.title}
            </h3>
            <span className="u-weight--200  u-size--9  u-size--8@md  u-text--center">
              {this.state.commissions.teaserText}
            </span>
          </div>
        </div>

        <div className="o-grid__row">
          <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--10@md  o-grid--offset--1@md  u-flex  u-flex--column  u-flex--items--center">
            <div>
              <span className="u-flex  u-flex--items--center  u-margin--b4">
                <img
                  className="u-margin--r4"
                  src="/media/Icons/email.png"
                  alt=""
                  width="30"
                  height="24"
                />
                <a
                  className="u-block  u-weight--200  u-size--9  u-size--8@md  u-black  u-no-decoration"
                  href="mailto:hello@cynthiameiring.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hello@cynthiameiring.com
                </a>
              </span>
              <span className="u-flex  u-flex--items--center  u-margin--b4">
                <img
                  className="u-margin--r4"
                  src="/media/Icons/instagram.png"
                  alt=""
                  width="30"
                  height="30"
                />
                <a
                  className="u-block  u-weight--200  u-size--9  u-size--8@md  u-black  u-no-decoration"
                  href="https://www.instagram.com/cynthia_meiring_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cynthia_meiring_studio
                </a>
              </span>

              <span className="u-flex  u-flex--items--center  u-margin--b4">
                <img
                  className="u-margin--r4"
                  src="/media/Icons/youtube.png"
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
                  src="/media/Icons/facebook.png"
                  alt=""
                  width="30"
                  height="30"
                />
                <a
                  className="u-block  u-weight--200  u-size--9  u-size--8@md  u-black  u-no-decoration"
                  href="https://www.facebook.com/CynthiaMeiringStudio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CynthiaMeiringStudio
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

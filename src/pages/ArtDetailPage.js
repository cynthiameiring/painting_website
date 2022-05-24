import React, { Component } from "react";
import ButtonText2 from "../components/ButtonText2";
// import IntroContentPage from "../components/IntroContentPage";
import data from "../data.js";

export default class ArtDetailPage extends Component {
  state = {
    artwork: "",
    activeImage: "",
    otherImages: [],
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    const artwork = data.pages
      .find((p) => p.title === "Artworks")
      .artworks.find((art) => art.id === parseInt(this.props.match.params.id));
    this.setState({
      artwork: artwork,
      activeImage: artwork.teaserImage,
      otherImages: artwork.productImages,
    });
  }

  imageClick = (image) => {
    this.setState({ activeImage: image });
  };

  render() {
    const artwork = data.pages
      .find((p) => p.title === "Artworks")
      .artworks.find((art) => art.id === parseInt(this.props.match.params.id));

    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y6  u-padding--y7@sm  u-padding--y8@lg">
        <div className="u-margin--b5  u-margin--b3@sm  u-margin--b0@md">
          <ButtonText2 text="< Back" src="/artworks" />
        </div>
        <div className="o-grid__row  u-margin--b5  u-margin--b6@sm  u-margin--b7@lg">
          <div className="o-grid__col  o-grid__col--12@xs  u-flex  u-flex--column  u-flex--items--center">
            <h2 className="h2-font">{this.state.artwork.title}</h2>
          </div>
        </div>
        <div className="o-grid__row">
          <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@sm  u-margin--b4  u-margin--b0@md">
            <img
              src={this.state.activeImage.url}
              alt="Posing with shoe painting"
              className="u-width--100  u-margin--b4"
            />
            <div className="u-flex u-flex--wrap">
              <img
                src={artwork.teaserImage.url}
                alt={artwork.teaserImage.alt}
                className={
                  "u-margin--b2  u-bs--solid  u-bw--3  u-pointer  v-overlay--hover  _width--art-detail  " +
                  (this.state.activeImage.url === artwork.teaserImage.url
                    ? "u-bc--black"
                    : "u-bc--white")
                }
                onClick={() => this.imageClick(artwork.teaserImage)}
              />

              {this.state.otherImages.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  className={
                    "u-margin--b2  u-bs--solid  u-bw--3  u-pointer  v-overlay--hover  _width--art-detail  _margin--art-detail  " +
                    (this.state.activeImage.url === image.url
                      ? "u-bc--black"
                      : "u-bc--white")
                  }
                  onClick={() => this.imageClick(image)}
                />
              ))}
            </div>
          </div>
          <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@sm  u-padding--l5@sm  u-padding--l7@lg  u-padding--l8@xl  u-padding--t6@lg">
            <div className={"c-availability  u-margin--b5  u-margin--b7@lg" + (artwork.status.toLowerCase() === "sold" ? "  u-white  u-bg--red-permission" : "  u-black  u-bg--white-gainsboro")}>
              <span className="">{artwork.status}</span>
            </div>
            {artwork.status === "Available" && artwork.contractedByGallery !== true && <h3 className="u-margin--b5  u-margin--b7@lg  u-size--7">
              For prices or other questions, please send an email to:{" "}
              <a
                className="u-black  u-no-decoration"
                href="mailto:hello@cynthiameiring.com"
              >
                hello@cynthiameiring.com
              </a>
            </h3>}
            {artwork.contractedByGallery && <h3 className="u-margin--b5  u-margin--b7@lg  u-size--7">
              This artwork is contracted by the gallery Dutch Luxury Design and can be purchased using{" "}
              <a
                  className="u-black"
                  href="https://dutchluxurydesign.com/en/our-artists/cynthia-meiring"
                  target="_blank"
                  rel="noopener noreferrer"
              >this link.</a>
            </h3>}
            <ul className="u-weight--200">
              {artwork.productDetails.map((item, index) => (
                <li key={index} className="u-lh--5  u-size--9  u-size--8@lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

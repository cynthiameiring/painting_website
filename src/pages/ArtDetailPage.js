import React, { Component } from "react";
import IntroContentPage from "../components/IntroContentPage";
import data from "../data.js";

export default class ArtDetailPage extends Component {
  state = {
    artwork: "",
    activeImage: "",
    otherImages: [],
  };

  componentDidMount() {
    const artwork = data.pages
      .find((p) => p.title === "Recent artworks")
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
      .find((p) => p.title === "Recent artworks")
      .artworks.find((art) => art.id === parseInt(this.props.match.params.id));

    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y5  u-padding--t7@sm  u-padding--t8@lg">
        <IntroContentPage title={this.state.artwork.title} intro="" />
        <div className="o-grid__row">
          <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@sm">
            <img
              src={this.state.activeImage.url}
              alt="Posing with shoe painting"
              className="u-width--100  u-margin--b4"
            />
            <div
              className="u-flex u-flex--wrap"
              style={{ marginLeft: "-16px" }}
            >
              <img
                src={artwork.teaserImage.url}
                alt={artwork.teaserImage.alt}
                style={{ width: "calc(25% - 16px)" }}
                className={
                  "u-margin--l4  u-margin--b4  u-bs--solid  u-bw--3  u-pointer  " +
                  (this.state.activeImage.url === artwork.teaserImage.url
                    ? "u-bc--red"
                    : "u-bc--white")
                }
                onClick={() => this.imageClick(artwork.teaserImage)}
              />

              {this.state.otherImages.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  style={{ width: "calc(25% - 16px)" }}
                  className={
                    "u-margin--l4  u-margin--b4  u-bs--solid  u-bw--3  u-pointer  " +
                    (this.state.activeImage.url === image.url
                      ? "u-bc--red"
                      : "u-bc--white")
                  }
                  onClick={() => this.imageClick(image)}
                />
              ))}
            </div>
          </div>
          <div className="o-grid__col  o-grid__col--12@xs  o-grid__col--6@sm  u-padding--l6  u-padding--l7@lg  u-padding--l8@xl  u-padding--t6@lg">
            <div className="infobanner  u-margin--b5  u-margin--b7@lg">
              <span className="">{artwork.status}</span>
            </div>
            <h3 className="u-margin--b5  u-margin--b7@lg  u-size--7">
              For prices or other questions, please send an email to:{" "}
              <a
                className="u-black  u-no-decoration"
                href="mailto:hello@cynthiameiring.com"
              >
                hello@cynthiameiring.com
              </a>
            </h3>
            <ul className="u-weight--200">
              {artwork.productDetails.map((item) => (
                <li className="u-lh--5  u-size--9  u-size--8@lg">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

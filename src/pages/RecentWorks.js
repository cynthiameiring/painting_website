import React, { Component } from "react";
import IntroContentPage from "../components/IntroContentPage";
import { Link } from "react-router-dom";
import data from "../data.js";

export default class RecentWorks extends Component {
  state = {
    recentWorks: data.pages.find((p) => p.title === "Recent artworks"),
  };

  render() {
    // console.log(work.src.toString().toLowerCase().replace(/\s+/g, "-"));
    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y5  u-padding--y7@sm  u-padding--y8@lg">
        <IntroContentPage title={this.state.recentWorks.title} intro="" />
        <div className="o-grid__row  u-flex--justify--center">
          {this.state.recentWorks.artworks.map((work) => (
            <Link
              className={`o-grid__col  o-grid__col--12@xs  o-grid__col--6@sm  o-grid__col--4@lg  u-padding--4  u-no-decoration  u-black`}
              key={work.title}
              to={`artworks/` + work.id}
            >
              <div className="u-relative">
                <img
                  src={work.teaserImage.url}
                  alt={work.teaserImage.alt}
                  className="u-relative  u-width--100"
                  onMouseOver={(e) =>
                    (e.currentTarget.src = work.productImages[0].url)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = work.teaserImage.url)
                  }
                />
                {work.status === "Sold" ? (
                  <div className="u-absolute  c-sold-sticker  u-flex  u-flex--items--center  u-flex--justify--center">
                    <span className="u-weight--500">{work.status}</span>
                  </div>
                ) : null}
              </div>
              <p className="u-text--center  u-size--9  u-padding--t3">
                {work.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

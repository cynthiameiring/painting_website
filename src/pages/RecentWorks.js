import React, { Component } from "react";
import IntroContentPage from "../components/IntroContentPage";
import { Link } from "react-router-dom";
import data from "../data.js";

export default class RecentWorks extends Component {
  state = {
    recentWorks: data.pages.find((p) => p.title === "Selected artworks"),
  };

  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y6  u-padding--y7@sm  u-padding--y8@lg">
        <IntroContentPage
          title={this.state.recentWorks.title}
          intro={this.state.recentWorks.teaserText}
        />
        <div className="o-grid__row  u-flex--justify--center@lg">
          <div className="-grid__col  o-grid__col--12@xs  o-grid__col--10@lg  u-flex  u-flex--wrap">
            {this.state.recentWorks.artworks
              .sort(function (a, b) {
                return a.id - b.id;
              })
              .map((work) => (
                <Link
                  className={`u-padding--4  u-no-decoration  u-black  u-margin--b4  u-width--100  u-width--50@sm`}
                  key={work.title}
                  to={`artworks/` + work.id}
                >
                  <div className="u-relative  u-padding--x2  u-width--100">
                    <img
                      src={work.teaserImage.url}
                      alt={work.teaserImage.alt}
                      className="u-relative  u-width--100 "
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
                    ) : (
                      <div className="u-absolute  c-available-sticker  u-flex  u-flex--items--center  u-flex--justify--center">
                        <span className="u-weight--400">{work.status}</span>
                      </div>
                    )}
                  </div>
                  <p className="u-text--center  u-size--8  u-padding--t2">
                    {work.title}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

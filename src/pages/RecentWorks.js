import React, { Component } from "react";
import IntroContentPage from "../components/IntroContentPage";
import { Link } from "react-router-dom";
import data from "../data.js";

export default class RecentWorks extends Component {
  state = {
    recentWorks: data.pages.find((p) => p.title === "Recent artworks"),
  };

  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y5  u-padding--y7@sm  u-padding--y8@lg">
        <IntroContentPage title={this.state.recentWorks.title} intro="" />
        <div className="o-grid__row  u-flex--justify--center">
          {this.state.recentWorks.artworks.map((work) => (
            <Link
              className={`o-grid__col  o-grid__col--6@xs  o-grid__col--4@md  o-grid__col--3@xxl  u-padding--4  u-no-decoration  u-black`}
              key={work.title}
              to={work.src}
            >
              <img
                src={work.teaserImage.url}
                alt={work.teaserImage.alt}
                className="u-relative  u-width--100  u-margin--b2"
                onMouseOver={(e) =>
                  // (e.currentTarget.src = work.productImages[0].url)
                  console.log(work.productImages[0].url)
                }
              />
              <p>{work.title}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

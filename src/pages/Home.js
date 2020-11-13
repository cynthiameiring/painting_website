import React, { Component } from "react";
import InstaWidget from "../components/InstaWidget";
import Header from "../components/Header";
import TextImage from "../components/TextImage";
import TextImage3 from "../components/TextImage3";
import { connect } from "react-redux";
import CardContainer from "../components/CardContainer";
import Fade from "react-reveal/Fade";
import Card from "../components/Card";

import shoes from "../media/shoe.jpg";
import video from "../media/video.jpg";
import data from "../data.js";

class Home extends Component {
  state = {
    recentWorks: {},
  };
  componentDidMount() {
    this.setState({
      recentWorks: data.pages.find((p) => p.title === "Recent artworks"),
    });
  }
  render() {
    return (
      <div className="">
        <Header />
        {this.props.headerImageLoaded ? (
          <div>
            <Fade bottom>
              <TextImage
                src={this.state.recentWorks.image.url}
                alt={this.state.recentWorks.image.alt}
                text={this.state.recentWorks.teaserText}
                title={this.state.recentWorks.title}
                imagePosition="left"
              />
            </Fade>
            {/* <Quote /> */}

            {/* <ScrollAnimation animateIn="zoomIn" animateOnce={true}> */}
            <Fade bottom>
              <div className="u-block  u-hidden@lg">
                <TextImage
                  src={this.state.recentWorks.image.url}
                  alt={this.state.recentWorks.image.alt}
                  text={this.state.recentWorks.teaserText}
                  title={"Process"}
                  imagePosition="right"
                />
              </div>
              <div className="u-padding--y4  u-padding--y7@sm  u-padding--y8@lg  u-relative  u-bg--white--white-smoke  u-bg--white@lg">
                <div className="o-grid  o-grid--fixed  u-width--100  u-z--1  u-relative">
                  <div className="o-grid__row  u-flex">
                    <div className="o-grid__col  o-grid__col--12@xs">
                      Get in touch
                    </div>
                  </div>
                  <div className="o-grid__row  u-flex">
                    <div className="o-grid__col  u-hidden  o-grid__col--4@lg  u-block@lg">
                      <Card image={shoes} title="Process" />
                    </div>
                    <div className="o-grid__col  o-grid__col--6@xs  o-grid__col--4@lg">
                      <Card image={video} title="Contact" />
                    </div>
                    <div className="o-grid__col  o-grid__col--6@xs  o-grid__col--4@lg">
                      <Card image={shoes} title="About" />
                    </div>
                  </div>
                </div>
              </div>

              {/* </ScrollAnimation> */}
            </Fade>

            {/* <TextImage2 /> */}
            {/* <ScrollAnimation animateIn="slideInUp" animateOnce={true}> */}
            <Fade bottom>
              <TextImage
                src={this.state.recentWorks.image.url}
                alt={this.state.recentWorks.image.alt}
                text={this.state.recentWorks.teaserText}
                title={this.state.recentWorks.title}
                imagePosition="left"
              />
            </Fade>

            {/* </ScrollAnimation> */}

            {/* <TextImage imagePosition="right" /> */}

            <Fade bottom>
              <InstaWidget />
            </Fade>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    headerImageLoaded: state.headerImageLoaded,
  };
};

export default connect(mapStateToProps, {})(Home);

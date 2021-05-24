import React, { Component } from "react";
import InstaWidget from "../components/InstaWidget";
import Header from "../components/Header";
import TextImage from "../components/TextImage";
import NewsletterBanner from "../components/NewsletterBanner";
import { connect } from "react-redux";
import Card from "../components/Card";
import processVideo from "../media/Videos/Alarm_clock_snippet_cropped.mp4";
import shoes from "../media/shoe.jpg";
import data from "../data.js";

class Home extends Component {
  state = {
    recentWorks: data.pages.find((p) => p.title === "Selected artworks"),
    about: data.pages.find((p) => p.title === "About"),
    process: data.pages.find((p) => p.title === "Process"),
    contact: data.pages.find((p) => p.title === "Contact"),
    gallery: data.pages.find((p) => p.title === "Gallery"),
    commissions: data.pages.find((p) => p.title === "Commissions"),
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="">
        <Header />

        <div>
          {/* <Fade bottom> */}
          <TextImage
            image={this.state.recentWorks.teaserImage.url}
            alt={this.state.recentWorks.teaserImage.alt}
            text={this.state.recentWorks.teaserText}
            src="/artworks"
            title={this.state.recentWorks.title}
            imagePosition="left"
            buttonText="See artworks"
          />
          <div className="u-block  u-hidden@lg">
            <TextImage
              text={this.state.commissions.teaserText}
              src="/contact"
              title="Commissions"
              image={this.state.commissions.teaserImage.url}
              imagePosition="right"
              buttonText="Read more"
            />
          </div>
          <div className="u-padding--y5  u-padding--y7@sm">
            <div className="o-grid  o-grid--fixed  u-width--100  u-z--1">
              <div className="o-grid__row  u-flex  u-flex  u-flex--column  u-flex--items--center">
                <h2 className="u-margin--b6  h2-font  v-rectangle--middle">
                  Get in touch and more!
                </h2>
              </div>
              <div className="o-grid__row  u-flex">
                <div className="o-grid__col  u-hidden  o-grid__col--4@lg  u-block@lg">
                  <Card
                    image={this.state.commissions.teaserImage.url}
                    title="Commissions"
                    url="/contact"
                    buttonText="Read more"
                    teaserText={this.state.commissions.teaserText}
                  />
                </div>
                <div className="o-grid__col  o-grid__col--6@xs  o-grid__col--4@lg">
                  <Card
                    image={this.state.contact.teaserImage.url}
                    title={this.state.contact.title}
                    url="/contact"
                    buttonText="Get in touch"
                    teaserText={this.state.contact.teaserText}
                  />
                </div>
                <div className="o-grid__col  o-grid__col--6@xs  o-grid__col--4@lg">
                  <Card
                    image={shoes}
                    title={this.state.about.title}
                    url="/about"
                    buttonText="Read more"
                    teaserText={this.state.about.teaserText}
                  />
                </div>
              </div>
            </div>
          </div>

          <NewsletterBanner />

          <TextImage
            text={this.state.process.teaserText}
            src="/process"
            title={"Process"}
            videoUrl={processVideo}
            imagePosition="right"
            buttonText="Watch the process"
          />
          {/* <TextImage
            image={this.state.gallery.teaserImage.url}
            alt={this.state.gallery.teaserImage.alt}
            text={this.state.gallery.teaserText}
            title="Gallery"
            imagePosition="left"
            src="/gallery"
            buttonText="Go to gallery"
          /> */}

          <div className="u-padding--y5  u-padding--b7  u-padding--y7@sm  u-padding--b8@lg">
            <InstaWidget />
          </div>

          {/* </Fade> */}
        </div>
        {/* ) : null} */}
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

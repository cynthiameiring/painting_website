import React, { Component } from "react";
import InstaWidget from "../components/InstaWidget";
import Header from "../components/Header";
import TextImage from "../components/TextImage";
import NewsletterBanner from "../components/NewsletterBanner";
import { connect } from "react-redux";
import Card from "../components/Card";
import processVideo from "../media/Videos/puzzled_teaser_website.mp4";
import shoes from "../media/shoe.jpg";
import data from "../data.js";

class Home extends Component {
  state = {
    recentWorks: data.pages.find((p) => p.title === "Artworks"),
    about: data.pages.find((p) => p.title === "About"),
    process: data.pages.find((p) => p.title === "Process"),
    contact: data.pages.find((p) => p.title === "Contact"),
    commissions: data.pages.find((p) => p.title === "Commissions"),
    frame: data.pages.find((p) => p.title === "Ready to hang"),
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="">
        <Header />

        <div className="u-padding--t6  u-padding--t7@sm">
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
                <h2 className="u-margin--b5  u-margin--b6@xl  u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  u-lh--2  v-rectangle--middle">
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
                    alt={this.state.contact.teaserImage.alt}
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

          <TextImage
            image={this.state.frame.teaserImage.url}
            alt={this.state.frame.teaserImage.alt}
            text={this.state.frame.teaserText}
            src="/frame"
            title="Ready to hang"
            imagePosition="left"
            buttonText="More pictures"
          />

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

          {/* Trick with padding and margin to give offset when linking to the newsletter */}
          <div id="newsletter-banner" >
            <div className="u-padding--t6  u-padding--t7@sm" >
              <NewsletterBanner
                  title="Stay up to date!"
                  text="Be among the first to hear about all the new artworks, get early access and receive other updates."
              />
            </div>
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

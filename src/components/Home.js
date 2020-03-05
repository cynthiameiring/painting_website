import React, { Component } from "react";
import banner from "../media/header-crop.jpg";
import banner2 from "../media/brush-image.jpeg";
import alufoil from "../media/alufoil.png";
import flower from "../media/flower.jpg";
import video from "../media/video.jpg";
import aboutme from "../media/shoe.jpg";
//import Instafeed from "instafeed.js";

// import { connect } from "react-redux";
// import shortid from "shortid";

// import Header from "./Header";
// import TargetContainer from "./TargetContainer";
// import Buttons from "./Buttons";
// import Adventurer from "./Adventurer";

// import { getLetters } from "../actions/word";
// import { correctWord } from "../actions/word";
// import { wrongWord } from "../actions/word";

// import { words } from "../data";
import "./home.css";

export default class Home extends Component {
  state = {
    posts: null
  };

  // componentDidMount() {
  //   let userFeed = new Instafeed({
  //     get: "user",
  //     userId: "8987997106",
  //     clientId: "924f677fa3854436947ab4372ffa688d",
  //     accessToken: "8987997106.924f677.8555ecbd52584f41b9b22ec1a16dafb9",
  //     resolution: "standard_resolution",
  //     template:
  //       '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
  //     sortBy: "most-recent",
  //     limit: 4,
  //     links: false
  //   });
  //   userFeed.run();
  //   //     this.pickWord();
  // }

  // componentDidMount() {
  //   let userFeed = new Instafeed({
  //     get: "user",
  //     userId: "8987997106",
  //     accessToken: "8987997106.924f677.8555ecbd52584f41b9b22ec1a16dafb9",
  //     resolution: "standard_resolution",
  //     template:
  //       '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
  //     sortBy: "most-recent",
  //     limit: 4,
  //     links: false
  //   });
  //   userFeed.run();
  //   //     this.pickWord();
  // }

  componentDidMount() {
    fetch(
      "https://graph.instagram.com/me/media?limit=4&fields=id,media_type,media_url,thumbnail_url,caption&access_token=IGQVJWS3ZAEZATMtWlk5T3h5NEg1dXJ1dmpRcGJGUk5HR3I4N1gzSUk2LUJXNG54ODVXUWR3UlNKSmNUUF9jV0N3QnByRHpyNE10THdrSUVhOHdjejZAOS2tQSmYzSnZAoV3Via3IxLThR"
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ posts: data.data });
      });
  }

  render() {
    if (!this.state.posts) {
      return <div>loading...</div>;
    }
    return (
      <div className="app">
        <header>
          <img src={banner} alt="banner"></img>
          <div className="title">
            <h2>Hyperrealistic paintings</h2>
            <p>by</p>
            <h2>Cynthia Meiring</h2>
          </div>
        </header>
        <section className="services-section">
          <div className="services-container">
            <img className="services-img" src={flower} alt="alufoil"></img>
            <img className="services-img" src={alufoil} alt="alufoil"></img>
            <img className="services-img" src={video} alt="alufoil"></img>
          </div>
        </section>
        <section className="about-me-section">
          <div className="about-me-container">
            <img src={aboutme}></img>
          </div>
        </section>

        <section className="instagram-container">
          <div>
            <h2>Instagram</h2>
          </div>
          <div className="posts">
            {this.state.posts.map(post => {
              if (
                post.media_type === "IMAGE" ||
                post.media_type === "CAROUSEL_ALBUM"
              ) {
                return (
                  <img key={post.id} src={post.media_url} alt="instagram"></img>
                );
              }
              return (
                <img
                  key={post.id}
                  src={post.thumbnail_url}
                  alt="instagram"
                ></img>
              );
            })}
          </div>
        </section>
        <section className="newsletter-section">
          <div className="newsletter-container"></div>
        </section>
        <section className="footer">
          <img src={banner2}></img>
        </section>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     guess: state.guess,
//     letters: state.letters,
//     targetBlocks: state.targetBlocks,
//     points: state.points
//   };
// };

// export default connect(mapStateToProps, {
//   correctWord,
//   wrongWord,
//   getLetters
// })(GameContainer);

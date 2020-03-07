import React, { Component } from "react";
import banner from "../media/header-crop.jpg";
import logo from "../media/Logo.png";
import banner2 from "../media/brush-image.jpeg";
import alufoil from "../media/alufoil.png";
import flower from "../media/flower.jpg";
import wip from "../media/wip.png";
import aboutme from "../media/shoe-cropped.jpg";
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
import "./styles/styles.css";

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
          <img src={banner} alt="banner" className="banner"></img>

          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="menu-light">
            <h3 className="hover">STORE</h3>
            <h3 className="hover">PROCESS</h3>
            <h3 className="hover">ABOUT</h3>
            <h3 className="hover">CONTACT</h3>
          </div>

          <div className="title">
            <h1>CYNTHIA MEIRING</h1>
          </div>
        </header>

        <section className="services-section">
          <h2>PHOTOREALISTIC PAINTINGS</h2>
          <hr />
          <div className="services-container">
            <div className="service">
              <img src={flower} alt="flower" />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis.
              </p>
              <button>Go to store</button>
            </div>
            <div className="service">
              <img src={alufoil} alt="alufoil" />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis.
              </p>
              <button>More info</button>
            </div>
            <div className="service">
              <img src={wip} alt="work in progress" />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis.
              </p>
              <button>See process</button>
            </div>
          </div>
        </section>

        <section className="about-me-section">
          <img src={aboutme} alt="about-me"></img>
          <div className="about-me-container">
            <h2>ABOUT THE ARTIST</h2>
            <hr />
            <p>
              Aenean ultricies, nisl a feugiat semper, metus sapien hendrerit
              mauris, eu finibus ante dolor quis purus. Nam non dapibus enim,
              eget blandit ex. Aenean feugiat scelerisque scelerisque. Nullam at
              nunc at est sollicitudin fermentum. Duis enim quam, lobortis eu
              ornare posuere, dictum ac ante. Sed mollis, eros pretium tempus
              suscipit, magna dui laoreet ligula, ac fringilla ligula diam ac
              ante. Mauris egestas ante in libero consequat, at porttitor nulla
              condimentum. Vestibulum mattis justo quis porttitor feugiat.
            </p>
          </div>
        </section>

        <section className="instagram-container">
          <h2>INSTAGRAM</h2>
          <hr />

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

        <section className="footer">
          <img src={banner2} alt="footer"></img>
          <div className="footer-container">
            Newsletter
            <div className="info-footer">
              <p>{"Shipping & Return"}</p>
              <p>Privacy policy</p>
            </div>
          </div>
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

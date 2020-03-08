import React, { Component } from "react";
import Header from "./Header";

import footer from "../media/brush-image.jpeg";
import alufoil from "../media/alufoil.png";
import flower from "../media/flower.jpg";
import wip from "../media/wip.png";
import aboutme from "../media/shoe-cropped.jpg";

import "./styles/styles.css";

export default class Home extends Component {
  state = {
    posts: null,
    open: false
  };

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
  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    console.log("posts", this.state.posts);
    return (
      <div className="app">
        <Header />
        <section className="services-section">
          <h2>PHOTOREALISTIC PAINTINGS</h2>
          <hr />
          <div className="services-container">
            <div className="service">
              <img src={flower} alt="flower" />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque.
              </p>
              <button>Go to store</button>
            </div>
            <div className="service">
              <img src={alufoil} alt="alufoil" />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque.
              </p>
              <button>More info</button>
            </div>
            <div className="service">
              <img src={wip} alt="work in progress" />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque.
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
            {!this.state.posts ? (
              <div>loading</div>
            ) : (
              this.state.posts.map(post => {
                if (
                  post.media_type === "IMAGE" ||
                  post.media_type === "CAROUSEL_ALBUM"
                ) {
                  return (
                    <img
                      key={post.id}
                      src={post.media_url}
                      alt="instagram"
                    ></img>
                  );
                }
                return (
                  <img
                    key={post.id}
                    src={post.thumbnail_url}
                    alt="instagram"
                  ></img>
                );
              })
            )}
          </div>
        </section>
        <section className="footer">
          <img src={footer} alt="footer "></img>
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

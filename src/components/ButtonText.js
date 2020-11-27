import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ButtonText extends Component {
  componentDidMount() {}

  render() {
    console.log(this.props.src);
    return this.props.externalLink ? (
      <a
        className="button  has-hover-propagation"
        href={this.props.src}
        target="_blank"
      >
        <span className="u-weight--400">{this.props.text}</span>
      </a>
    ) : this.props.hoverpropagation ? (
      <div className="button  has-hover-propagation">
        <span className="u-weight--400">{this.props.text}</span>
      </div>
    ) : (
      <Link className="button  has-hover-propagation" to={this.props.src}>
        <span className="u-weight--400">{this.props.text}</span>
      </Link>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ButtonText extends Component {
  componentDidMount() {}

  render() {
    return this.props.externalLink ? (
      <a
        className="button2  has-hover-propagation  u-bg-hover--white-gainsboro"
        href={this.props.src}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="u-weight--400">{this.props.text}</span>
      </a>
    ) : this.props.hoverpropagation ? (
      <div className="button2  has-hover-propagation  u-bg-hover--white-gainsboro">
        <span className="u-weight--400">{this.props.text}</span>
      </div>
    ) : (
      <Link
        className="button2  has-hover-propagation  u-bg-hover--white-gainsboro"
        to={this.props.src}
      >
        <span className="u-weight--400">{this.props.text}</span>
      </Link>
    );
  }
}

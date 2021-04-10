import React, { Component } from "react";
import axios from "axios";
import { serverUrl } from "../constants";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      status: "Submit",
      privacyCheck: false,
    };
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: "Sending" });
    axios({
      method: "POST",
      url: `${serverUrl}/contact`,
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        this.setState({ name: "", email: "", message: "", status: "Succes" });
      } else if (response.data.status === "failed") {
        this.setState({ status: "Failed" });
      }
    });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        id="contact-form"
        method="POST"
        action="send"
        encType="multipart/form-data"
        className="u-width--100  u-flex  u-flex--column  u-flex--items--center"
      >
        <div className="u-flex  u-width--100">
          <div className="u-margin--b3  u-margin--r2  u-width--50">
            <label
              htmlFor="firstName"
              className="u-weight--200  u-size--9  u-size--8@md"
            >
              First name
            </label>
            <input
              name="firstName"
              type="text"
              id="firstName"
              value={this.state.firstName}
              onChange={this.handleChange.bind(this)}
              required
              className="u-width--100  u-padding--2  u-bw--2  u-bc--grey--silver  u-bs--solid  u-br--1"
              style={{ WebkitAppearance: "none" }}
            />
          </div>
          <div className="u-margin--b3  u-margin--l2  u-width--50">
            <label
              htmlFor="lastName"
              className="u-weight--200  u-size--9  u-size--8@md"
            >
              Last name
            </label>
            <input
              name="lastName"
              type="text"
              id="lastName"
              value={this.state.lastName}
              onChange={this.handleChange.bind(this)}
              required
              className="u-width--100  u-padding--2  u-bw--2  u-bc--grey--silver  u-bs--solid  u-br--1"
              style={{ WebkitAppearance: "none" }}
            />
          </div>
        </div>
        <div className="u-width--100">
          <label
            htmlFor="email"
            className="u-weight--200  u-size--9  u-size--8@md"
          >
            Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
            required
            className="u-width--100  u-padding--2  u-margin--b3  u-bw--2  u-bc--grey--silver  u-bs--solid  u-br--1"
            style={{ WebkitAppearance: "none" }}
          />
        </div>
        <div className="u-width--100">
          <label
            htmlFor="message"
            className="u-weight--200  u-size--9  u-size--8@md"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={this.state.message}
            onChange={this.handleChange.bind(this)}
            required
            className="u-width--100  u-padding--2  u-margin--b2  u-bw--2  u-bc--grey--silver  u-bs--solid  u-br--1"
            style={{ WebkitAppearance: "none" }}
          />
        </div>
        <div className="u-width--100">
          <input
            name="privacyCheck"
            id="privacyCheck"
            type="checkbox"
            className="u-margin--b5  u-margin--r2"
            onChange={this.handleChange.bind(this)}
            required
          />
          <label
            htmlFor="privacyCheck"
            className="u-weight--200  u-size--9  u-size--8@md"
          >
            I agree to the{" "}
            <Link className="c-internal-link" to="/privacy-policy">
              Privacy Policy
            </Link>
          </label>
        </div>
        {this.state.status === "Sending" ? (
          <Loader type="ThreeDots" color="#478f9e" height={80} width={80} />
        ) : this.state.status === "Failed" ? (
          <p className="u-size--8  u-size--7@md  u-red--valencia  u-weight--700">
            Error, message not sent.
          </p>
        ) : this.state.status === "Succes" ? (
          <p className="u-size--8  u-size--7@md  u-green-medium-sea  u-weight--700">
            Thank you for your message! We come back to you as soon as possible.
          </p>
        ) : (
          <button
            type="submit"
            className="u-bg--blue--hiipie-blue  u-bg-hover--yellow--tulip-tree  u-pointer  u-trans--bg  u-white  u-bw--0  u-padding--x3  u-padding--y2  u-br--1"
            style={{ width: "80px" }}
          >
            Submit
          </button>
        )}
      </form>
    );
  }
}

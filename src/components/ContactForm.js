import React, { Component } from "react";
import axios from "axios";
import { serverUrl } from "../constants";

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Submit",
    };
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
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
        alert("Message Sent");
        this.setState({ name: "", email: "", message: "", status: "Submit" });
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    });
  }

  render() {
    let buttonText = this.state.status;
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        id="contact-form"
        method="POST"
        action="send"
        encType="multipart/form-data"
        className="u-width--100  u-flex  u-flex--column  u-flex--items--center"
      >
        <input
          name="name"
          type="text"
          id="name"
          value={this.state.name}
          placeholder="Name"
          onChange={this.handleChange.bind(this)}
          required
          className="u-width--100  u-padding--2  u-margin--b3  u-bw--2  u-bc--grey--silver  u-bs--solid  u-br--1"
        />
        <input
          name="email"
          type="email"
          id="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.handleChange.bind(this)}
          required
          className="u-width--100  u-padding--2  u-margin--b3  u-bw--2  u-bc--grey--silver  u-bs--solid  u-br--1"
        />
        <textarea
          name="message"
          id="message"
          value={this.state.message}
          placeholder="Message"
          onChange={this.handleChange.bind(this)}
          required
          className="u-width--100  u-padding--2  u-margin--b3  u-bw--2  u-bc--grey--silver  u-bs--solid  u-br--1"
        />
        <button
          type="submit"
          className="u-bg--blue--hiipie-blue  u-bg-hover--yellow--tulip-tree  u-pointer  u-trans--bg  u-white  u-bw--0  u-padding--x3  u-padding--y2  u-br--1"
          style={{ width: "80px" }}
        >
          {buttonText}
        </button>
      </form>
    );
  }
}

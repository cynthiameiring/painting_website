import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../constants";

// a basic form
export default class SignupForm extends React.Component {
  state = {
    status: null,
    message: null,
    data: {
      email: "",
      name: "",
      privacyCheck: false,
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log("handlesubmit");
    this.setState({
      status: "sending",
    });

    if (!this.state.data.name) {
      this.setState({
        status: "error",
        message: "Please enter your name",
      });
    } else if (
      !this.state.data.email ||
      this.state.data.email.indexOf("@") === -1
    ) {
      this.setState({
        status: "error",
        message: "This is not a valid email address",
      });
    } else if (!this.state.data.privacyCheck) {
      this.setState({
        status: "error",
        message: "Please agree with the privacy policy",
      });
    } else {
      axios({
        method: "PUT",
        url: `${serverUrl}/subscribe`,
        data: this.state.data,
      })
        .then(() => {
          const data = { ...this.state.data };
          data["name"] = "";
          data["email"] = "";
          data["privacyCheck"] = false;

          this.setState({
            status: "success",
            message: "Thank you for subscribing",
            data: data,
          });
        })
        .catch((error) => {
          this.setState({ status: "error", message: "Something went wrong" });
        });
    }
  };

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const data = { ...this.state.data };
    data[name] = value;

    this.setState({ data: data });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="u-text--center">
        <div className="u-flex  u-flex--wrap  u-margin--b4  u-flex--justify--center">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.data.name}
            onChange={this.handleChange.bind(this)}
            className="c-form--input  u-margin--r2@md  u-width--100  u-width--50@sm  u-width--33@md"
            style={{ WebkitAppearance: "none" }}
          />
          <input
            type="text"
            placeholder="Your email"
            name="email"
            value={this.state.data.email}
            onChange={this.handleChange.bind(this)}
            className="c-form--input  u-margin--x2@md  u-width--100  u-width--50@sm  u-width--33@md"
            style={{ WebkitAppearance: "none" }}
          />
          <button
            className="u-hidden  u-block@md  c-form--submit  u-margin--l2"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div className="u-width--100  u-margin--b2">
          <input
            name="privacyCheck"
            type="checkbox"
            className="u-margin--r2"
            value={this.state.data.privacyCheck}
            onChange={this.handleChange.bind(this)}
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
        <button
          className="u-hidden@md  c-form--submit  u-margin--l2"
          type="submit"
        >
          Submit
        </button>

        {this.props.status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {this.props.status === "error" && (
          <div
            style={{ color: "red" }}
            className="u-margin--t2"
            dangerouslySetInnerHTML={{ __html: this.props.message }}
          />
        )}
        {this.state.status === "error" && (
          <div
            style={{ color: "red" }}
            className="u-margin--t2"
            dangerouslySetInnerHTML={{ __html: this.state.message }}
          />
        )}
        {this.state.status === "success" && (
          <div
            style={{ color: "green" }}
            className="u-margin--t2"
            dangerouslySetInnerHTML={{ __html: this.state.message }}
          />
        )}
      </form>
    );
  }
}

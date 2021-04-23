import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email, firstName, lastName;
  const submit = () =>
    email &&
    firstName &&
    lastName &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: firstName.value,
      LNAME: lastName.value,
    });

  return (
    <div>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {/* {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )} */}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <label
        htmlFor="firstName"
        className="u-weight--200  u-size--9  u-size--8@md"
      >
        First name
      </label>
      <input
        className="c-form--input"
        ref={(node) => (firstName = node)}
        type="text"
        id="firstName"
      />
      <br />
      <label
        htmlFor="lastName"
        className="u-weight--200  u-size--9  u-size--8@md"
      >
        Last name
      </label>
      <input
        className="c-form--input"
        ref={(node) => (lastName = node)}
        type="text"
        id="lastName"
      />
      <br />
      <label htmlFor="email" className="u-weight--200  u-size--9  u-size--8@md">
        Email
      </label>
      <input
        className="c-form--input"
        ref={(node) => (email = node)}
        type="email"
        id="email"
      />
      <br />
      <button className="c-form--submit" onClick={submit}>
        Submit
      </button>
    </div>
  );
};

export default class SignupForm extends Component {
  render() {
    const url =
      "https://cynthiameiring.us1.list-manage.com/subscribe/post?u=a5916f3256a028da820616aab&amp;id=8ab614aad8";

    return (
      <div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}

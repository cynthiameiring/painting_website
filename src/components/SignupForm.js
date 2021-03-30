import React, { Component } from "react";
// import { render } from "react-dom";

import MailchimpSubscribe from "react-mailchimp-subscribe";

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email, firstName, lastName, country;
  const submit = () =>
    email &&
    firstName &&
    lastName &&
    country &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: firstName.value,
      LNAME: lastName.value,
      COUNTRY: country.value,
    });

  return (
    <div
      style={{
        background: "#efefef",
        borderRadius: 2,
        padding: 10,
        display: "inline-block",
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={(node) => (firstName = node)}
        type="text"
        placeholder="First name"
      />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={(node) => (lastName = node)}
        type="text"
        placeholder="Last name"
      />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={(node) => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={(node) => (country = node)}
        type="text"
        placeholder="Country of residence"
      />
      <br />
      <textarea></textarea>
      <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
        Submit
      </button>
    </div>
  );
};

export default class SignupForm extends Component {
  render() {
    const url =
      // signup form:
      //   "https://cynthiameiring.us1.list-manage.com/subscribe/post?u=a5916f3256a028da820616aab&amp;id=8ab614aad8";
      "https://cynthiameiring.us1.list-manage.com/contact-form?u=a5916f3256a028da820616aab&form_id=685fe63297ea9c20878e5fb2e1195b9c";

    return (
      <div>
        <h2>Get in touch</h2>
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

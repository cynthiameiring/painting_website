import React, { Component } from "react";
// import MailchimpSubscribe from "./MailchimpSubscribe";
import SignupForm from "./SignupForm";

// De signupform van Mailchimp zelf werkt niet, want bij submitten werd je geredirect naar een pagina met het mail-chimp formulier.
// De MailchimpSubscribe plugin gebruiken was ook geen goed idee, want hier kan je de errormessages niet aanpassen en als ik wil checken of
// iemand al op de lijst staat of een bepaalde tag meesturen, dan kan dat ook niet. Daarom is uiteindelijk gekozen om de MailChimp Api zelf aan te roepen.

// POGING 1

// const CustomForm = ({ status, message, onValidated }) => {
//   let email;
//   const submit = () =>
//     email &&
//     email.value.indexOf("@") > -1 &&
//     onValidated({
//       EMAIL: email.value,
//     });

//   return (
//     <div className="u-flex  ">
//       <div className="u-flex  u-flex--justify--center  u-width--100">
//         <input
//           className="c-form--input  u-width--75  u-width--50@sm  u-width--33@lg  u-margin--r3"
//           ref={(node) => (email = node)}
//           type="email"
//           id="email"
//           placeholder="Email"
//         />
//         <button className="c-form--submit" onClick={submit}>
//           Submit
//         </button>
//       </div>
//       {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
//       {/* {status === "error" && (
//         <div
//           style={{ color: "red" }}
//           dangerouslySetInnerHTML={{ __html: message }}
//         />
//       )} */}
//       {status === "success" && (
//         <div
//           style={{ color: "green" }}
//           dangerouslySetInnerHTML={{ __html: message }}
//         />
//       )}
//     </div>
//   );
// };

// export default class NewsletterBanner extends Component {
//   state = {};
//   render() {
//     const url =
//       "https://cynthiameiring.us1.list-manage.com/subscribe/post?u=a5916f3256a028da820616aab&amp;id=8ab614aad8";

//     return (
//       <div className="u-padding--y6  u-padding--y7@sm">
//         <div
//           className="o-grid  o-grid--fixed  u-width--100  u-padding--4"
//           style={{ backgroundColor: "#dfdfdf" }}
//         >
//           <div className="o-grid__row">
//             <div className="o-grid__col  o-grid__col--12@xs">
//               <h2 className="u-text--center  u-margin--b5  u-margin--b6@xl  u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  u-lh--2  v-rectangle--middle">
//                 Join the collectors list!
//               </h2>
//             </div>
//           </div>
//           <div className="o-grid__row">
//             <div className="o-grid__col  o-grid__col--12@xs">
//               <MailchimpSubscribe
//                 url={url}
//                 render={({ subscribe, status, message }) => (
//                   <CustomForm
//                     status={status}
//                     message={message}
//                     onValidated={(formData) => subscribe(formData)}
//                   />
//                 )}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// POGING 2

// export default class NewsletterBanner extends Component {
//   state = {
//     EMAIL: "",
//   };

//   handleChange(event) {
//     console.log(event.target.value);
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value,
//     });
//   }

//   render() {
//     return (
//       <div className="u-padding--y6  u-padding--y7@sm">
//         <div
//           className="o-grid  o-grid--fixed  u-width--100  u-padding--4"
//           style={{ backgroundColor: "#dfdfdf" }}
//         >
//           <div className="o-grid__row">
//             <div className="o-grid__col  o-grid__col--12@xs">
//               <h2 className="u-text--center  u-margin--b5  u-margin--b6@xl  u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  u-lh--2  v-rectangle--middle">
//                 Join the collectors list!
//               </h2>
//             </div>
//           </div>
//           <div className="o-grid__row">
//             <div className="o-grid__col  o-grid__col--12@xs">
//               <form
//                 action="https://cynthiameiring.us1.list-manage.com/subscribe/post-json?u=a5916f3256a028da820616aab&amp;id=8ab614aad8"
//                 method="post"
//                 id="mc-embedded-subscribe-form"
//                 name="mc-embedded-subscribe-form"
//                 className="validate"
//                 target="_blank"
//                 noValidate
//               >
//                 <div id="mc_embed_signup_scroll">
//                   <h2>Subscribe</h2>
//                   <div className="indicates-required">
//                     <span className="asterisk">*</span> indicates required
//                   </div>
//                   <div className="mc-field-group">
//                     <input
//                       type="email"
//                       value={this.state.EMAIL}
//                       name="EMAIL"
//                       className="required email"
//                       id="mce-EMAIL"
//                       onChange={this.handleChange.bind(this)}
//                       placeholder="Email"
//                     />
//                   </div>
//                   <div id="mce-responses" className="clear">
//                     <div
//                       className="response"
//                       id="mce-error-response"
//                       style={{ display: "none" }}
//                     ></div>
//                     <div
//                       className="response"
//                       id="mce-success-response"
//                       style={{ display: "none" }}
//                     ></div>
//                   </div>
//                   {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
//                   <div
//                     style={{ position: "absolute", left: "-5000px" }}
//                     aria-hidden="true"
//                   >
//                     <input
//                       type="text"
//                       name="b_a5916f3256a028da820616aab_8ab614aad8"
//                       tabIndex="-1"
//                       defaultValue=""
//                     />
//                   </div>
//                   <div className="clear">
//                     <input
//                       type="submit"
//                       vdalue="Subscribe"
//                       name="subscribe"
//                       id="mc-embedded-subscribe"
//                       className="button"
//                     />
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// POGING 3

export default class NewsletterBanner extends Component {
  state = {};
  render() {
    return (
      <div
        className="o-grid  o-grid--fixed  u-width--100  u-padding--5"
        style={{ backgroundColor: "#dfdfdf" }}
      >
        <div className="o-grid__row">
          <div className="o-grid__col  o-grid__col--12@xs  u-text--center">
            <h2 className="u-margin--b5  u-margin--b6@xl  u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  u-lh--2  v-rectangle--middle">
              {this.props.title}
            </h2>
            <p className="u-margin--b4">
              {this.props.text}
            </p>
          </div>
        </div>
        <div className="o-grid__row">
          <div className="o-grid__col  o-grid__col--12@xs">
            <SignupForm />
          </div>
        </div>
      </div>
    );
  }
}

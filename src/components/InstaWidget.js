import React, { Component } from "react";
import ButtonText from "./ButtonText";

export default class InstaWidget extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="o-grid  o-grid--fixed  u-width--100">
        <div className="o-grid__row  u-flex">
          <div className="o-grid__col  o-grid__col--12@xs">
            <div className="u-padding--y8  u-flex  u-flex--column  u-flex--items--center">
              <div className="u-size--3  u-margin--b6  u-weight--600  v-rectangle  v-rectangle--mobile">
                Instagram
              </div>
              <iframe
                onClick={(event) => event.preventDefault()}
                src="https://snapwidget.com/embed/879762"
                className="snapwidget-widget  u-margin--b6"
                allowtransparency="true"
                frameborder="0"
                scrolling="no"
                style={{
                  border: "none",
                  overflow: "hidden",
                  width: "100%",
                  pointerEvents: "none",
                }}
              ></iframe>
              <ButtonText
                text="Go to Instagram"
                src="https://www.instagram.com/cynthia_meiring_art"
                handleClick={this.handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

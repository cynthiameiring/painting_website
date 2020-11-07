import React, { Component } from "react";
import InstaWidget from "../components/InstaWidget";
import Header from "../components/Header";
import TextImage from "../components/TextImage";
import TextImage2 from "../components/TextImage2";
import TextImage3 from "../components/TextImage3";
import Quote from "../components/Quote";
import { connect } from "react-redux";
import CardContainer from "../components/CardContainer";

export default class Home extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <TextImage imagePosition="left" />
        {/* <Quote /> */}

        <CardContainer />

        {/* <TextImage2 /> */}
        <TextImage3 />
        {/* <TextImage imagePosition="right" /> */}

        <InstaWidget />
      </div>
    );
  }
}

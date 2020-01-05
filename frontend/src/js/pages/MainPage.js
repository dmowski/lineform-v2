import React, { Component } from "react";
import StartScreen from "../components/StartScreen";
import Menu from "../components/Menu";
import PreviewList from "../components/PreviewList";
import Footer from "../components/Footer";
import Partners from "../components/Partners";

export class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <StartScreen />
        <Menu />
        <PreviewList />
        <Partners />
        <Footer />
      </React.Fragment>
    );
  }
}

export default MainPage;

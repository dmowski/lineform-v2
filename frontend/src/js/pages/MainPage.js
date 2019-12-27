import React, { Component } from "react";
import StartScreen from "../components/StartScreen";
import Menu from "../components/Menu";
import Preview from "../components/Preview";
import Footer from "../components/Footer";
import Partners from "../components/Partners";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <StartScreen />
        <Menu />

        <Menu />

        <div className="preview-grid">
          <Preview />
        </div>

        <Partners />

        <Footer />
      </React.Fragment>
    );
  }
}

export default MainPage;

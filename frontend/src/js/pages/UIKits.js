import React, { Component } from "react";
import domani from "../../images/partners/logo-domani.png";
import carrot from "../../images/partners/carrot.png";
import StartScreen from "../components/StartScreen";
import Menu from "../components/Menu";
import Preview from "../components/Preview";
import Footer from "../components/Footer";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export class UIKits extends Component {
  render() {
    return (
      <React.Fragment>
        <StartScreen />
        <Menu />

        <div className="preview-grid">
          <Preview />
          <Preview />
          <Preview />
        </div>

        <div className="partners content">
          <h2 className="partners__title">НАШИ ПАРТНЁРЫ</h2>

          <a
            className="partners__link"
            href="http://domani.by/"
            target="_blank"
          >
            <img alt="" className="partners__img" src={domani} />
          </a>

          <a
            className="partners__link"
            href="http://domani.by/"
            target="_blank"
          >
            <img alt="" className="partners__img" src={carrot} />
          </a>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default UIKits;

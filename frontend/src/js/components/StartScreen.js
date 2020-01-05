import React from "react";
import logoImage from "../../images/logo.svg";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { defaultRoute } from "./Menu";

class StartScreen extends React.Component {
  getNavigation() {
    return defaultRoute
      .filter(item => item.href !== "/")
      .map(navigateItem => {
        return (
          <Link
            key={navigateItem.href}
            className="start-screen__link"
            to={navigateItem.href}
          >
            {navigateItem.title}
          </Link>
        );
      });
  }
  render() {
    return (
      <div className="start-screen">
        <div className="start-screen__container">
          <span className="start-screen__info">STUDIO DESIGN</span>

          <div className="start-screen__logo">
            <img src={logoImage} alt="" />
          </div>

          <nav className="start-screen__navigation">{this.getNavigation()}</nav>
        </div>
      </div>
    );
  }
}

export default StartScreen;

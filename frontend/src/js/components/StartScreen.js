import React from "react";
import logoImage from "../../images/logo.svg";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class StartScreen extends React.Component {
  render() {
    return (
      <div className="start-screen">
        <div className="start-screen__container">
          <span className="start-screen__info">STUDIO DESIGN</span>

          <div className="start-screen__logo">
            <img src={logoImage} alt="" />
          </div>

          <nav className="start-screen__navigation">
            <Link className="start-screen__link" to="/projects">
              Проекты
            </Link>
            <Link className="start-screen__link" to="/services">
              Услуги
            </Link>
            <Link className="start-screen__link" to="/about">
              О нас
            </Link>
            <Link className="start-screen__link" to="/contacts">
              Контакты
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}

export default StartScreen;

import React from "react";
import logoImage from "../../images/logo.svg";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <Link className="menu__link" to="/projects">
          Проекты
        </Link>
        <Link className="menu__link" to="/services">
          Услуги
        </Link>
        <Link className="menu__link" to="/about">
          О нас
        </Link>
        <Link className="menu__link" to="/contacts">
          Контакты
        </Link>
      </div>
    );
  }
}

export default Menu;

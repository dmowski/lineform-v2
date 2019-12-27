import React from "react";
import logoImage from "../../images/logo.svg";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends React.Component {
  getLinks() {
    let i = 0;
    console.log(this.props);
    const list = this.props.list || [];
    return list.map(menuItem => {
      const href = menuItem.href || "";
      return (
        <a key={i++} className="menu__link" href={href}>
          {menuItem.title}
        </a>
      );
    });
  }
  render() {
    return <div className="menu">{this.getLinks()}</div>;
  }
}

export default Menu;

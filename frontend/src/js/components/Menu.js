import React from "react";
import logoImage from "../../images/logo.svg";

export const defaultRoute = [
  {
    title: "Проекты",
    href: "/projects",
  },
  {
    title: "Услуги",
    href: "/services",
  },
  {
    title: "О нас",
    href: "/about",
  },
  {
    title: "Контакты",
    href: "/contacts",
  },
  {
    title: "UIkits",
    href: "/uikits",
  },
];
class Menu extends React.Component {
  getLinks() {
    let i = 0;
    const list = this.props.list || defaultRoute;
    return list.map(menuItem => {
      return (
        <a
          key={i++}
          className="menu__link"
          href={menuItem.href}
          onClick={menuItem.clickHandler}
        >
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

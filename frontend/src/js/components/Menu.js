import React from "react";
import logoImage from "../../images/logo.svg";

export const defaultRoute = [
  {
    title: "Главная",
    href: "/",
  },
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
  isActiveElement(title) {
    return this.props.activeItem && this.props.activeItem === title;
  }
  getLinks() {
    let i = 0;
    const list = this.props.list || defaultRoute;
    return list.map(menuItem => {
      const clickHandler = event => {
        if (!menuItem.clickHandler) return;
        event.detail = menuItem.title;
        menuItem.clickHandler(event);
      };

      const isActive = this.isActiveElement(menuItem.title);
      const activeClass = isActive ? "menu__link_active" : "";
      const classes = `menu__link ${activeClass}`;

      return (
        <a
          key={i++}
          className={classes}
          href={menuItem.href}
          onClick={clickHandler}
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

import React from "react";
import logoImage from "../../images/logo.svg";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="content footer">
        <div className="footer__info">
          <h3>Lineform</h3>
          <p>Interior design and furniture</p>
        </div>
        <div className="footer__info">
          <p>
            <span className="phone">+375(29) 871-53-56</span>ДИЗАЙН
          </p>
          <p>
            <span className="phone">+375(29) 649-25-45</span>ПО ВОПРОСАМ
            СОТРУДНИЧЕСТВА
          </p>
        </div>

        <div className="footer__info footer__info_soc">
          <a
            className="footer__link footer__link_vk"
            href="https://vk.com/club120593301"
            target="_blank"
          ></a>
          <a
            className="footer__link footer__link_fb"
            href="https://www.facebook.com/Lineformby/"
            target="_blank"
          ></a>
          <a
            className="footer__link footer__link_in"
            href="https://www.instagram.com/lineform_design/"
            target="_blank"
          ></a>
          <a
            className="footer__link footer__link_bh"
            href="https://www.behance.net/Lineformdesign"
            target="_blank"
          ></a>
        </div>
        <div className="footer__info">
          <p>Беларусь. г. Минск</p>
          <p>info@lineform.by</p>
          <p>© Lineform studio design / 2017</p>
        </div>
      </footer>
    );
  }
}

export default Footer;

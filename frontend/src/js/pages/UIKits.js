import React, { Component } from "react";
import axios from "axios";
import Preview from "../components/Preview";
import logoImage from "../../images/logo.svg";
import domani from "../../images/partners/logo-domani.png";
import carrot from "../../images/partners/carrot.png";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export class UIKits extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="start-page">
          <div className="start-page__container">
            <span className="start-page__info">STUDIO DESIGN</span>

            <div className="start-page__logo">
              <img src={logoImage} alt="" />
            </div>

            <nav className="start-page__navigation">
              <Link className="start-page__link" to="/projects">
                Проекты
              </Link>
              <Link className="start-page__link" to="/services">
                Услуги
              </Link>
              <Link className="start-page__link" to="/about">
                О нас
              </Link>
              <Link className="start-page__link" to="/contacts">
                Контакты
              </Link>
            </nav>
          </div>
        </div>

        <div className="menu">
          <a href="#" className="menu__link">
            Проекты
          </a>
          <a href="#" className="menu__link">
            Услуги
          </a>
          <a href="#" className="menu__link menu__link_active">
            О нас
          </a>
          <a href="#" className="menu__link">
            Контакты
          </a>
        </div>

        <div className="menu">
          <a href="#" className="menu__link">
            Все
          </a>
          <a href="#" className="menu__link">
            Мебель
          </a>
          <a href="#" className="menu__link menu__link_active">
            Интерьер
          </a>
        </div>

        <div className="preview-grid">
          <div className="preview">
            <div className="preview__img-container">
              <img
                className="preview__img"
                src="https://s3.eu-west-2.amazonaws.com/lineform/small_1524817061159_766.jpg"
              />
            </div>
            <h3 className="preview__title">
              Проект интерьера офиса компании "INN TOUR LAB"
            </h3>
            <h5 className="preview__info">Интерьер</h5>
          </div>
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
      </React.Fragment>
    );
  }
}

export default UIKits;

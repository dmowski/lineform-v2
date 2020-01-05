import React, { Component } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export class Contacts extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <div className="contacts content">
          <h2>НАШИ КОНТАКТЫ</h2>
          <h3>ДИЗАЙН ИНТЕРЬЕРА, МЕБЕЛЬ</h3>
          <span>+375 (29) 871-53-56</span>

          <h3>ПО ВОПРОСАМ СОТРУДНИЧЕСТВА</h3>
          <span>+375 (29) 649-25-45</span>

          <h4>Написать нам</h4>
          <textarea
            cols="30"
            name=""
            placeholder="Ваше сообщение"
            rows="10"
          ></textarea>
          <br />
          <input
            placeholder="Ваш номер телефона (либо другой контакт)"
            type="text"
          />
          <br />
          <input placeholder="Ваше имя" type="text" />
          <br />
          <input type="submit" value="Отправить" />
          <h4>Lineform в социальных сетях</h4>

          <a
            className="contacts__vk"
            href="https://vk.com/club120593301"
            target="_blank"
          ></a>
          <a
            className="contacts__fb"
            href="https://www.facebook.com/Lineformby/"
            target="_blank"
          ></a>
          <a
            className="contacts__in"
            href="https://www.instagram.com/lineform_design/"
            target="_blank"
          ></a>
          <a
            className="contacts__bh"
            href="https://www.behance.net/Lineformdesign"
            target="_blank"
          ></a>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contacts;

import React from "react";
import domani from "../../images/partners/logo-domani.png";
import carrot from "../../images/partners/carrot.png";

class Partners extends React.Component {
  render() {
    return (
      <div className="partners content">
        <h2 className="partners__title">НАШИ ПАРТНЁРЫ</h2>

        <a className="partners__link" href="http://domani.by/" target="_blank">
          <img alt="" className="partners__img" src={domani} />
        </a>

        <a className="partners__link" href="http://domani.by/" target="_blank">
          <img alt="" className="partners__img" src={carrot} />
        </a>
      </div>
    );
  }
}

export default Partners;

import React from "react";
class Preview extends React.Component {
  render() {
    return (
      <div className="preview">
        <div className="preview__img-container">
          <img
            className="preview__img"
            src={`http://placeimg.com/440/340/any?salt=${Math.random()}`}
          />
        </div>
        <h3 className="preview__title">Проект интерьера</h3>
        <h5 className="preview__info">Интерьер</h5>
      </div>
    );
  }
}

export default Preview;

import React from "react";
class Preview extends React.Component {
  render() {
    return (
      <div className="preview">
        <div className="preview__img-container">
          <img
            className="preview__img"
            src="https://s3.eu-west-2.amazonaws.com/lineform/small_1524817061159_766.jpg"
          />
        </div>
        <h3 className="preview__title">Проект интерьера</h3>
        <h5 className="preview__info">Интерьер</h5>
      </div>
    );
  }
}

export default Preview;

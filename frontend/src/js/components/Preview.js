import React from "react";
class Preview extends React.Component {
  /*
  category: "МЕБЕЛЬ"
  firstImg: "https://s3.eu-west-2.amazonaws.com/lineform/big_1518863197526_769.jpg"
  id: "2"
  img: "https://s3.eu-west-2.amazonaws.com/lineform/small_1518863162326_707.jpg"
  infoBlocks: (4) [{…}, {…}, {…}, {…}]
  replacedImgUrl: false
  summary: ""
  text: "<p>Стул H3 задумывался, как объект, который можно использовать, как в помещении, так и на улице, добавляя к нему по необходимости съемную накидку для удобства человека.</p>↵↵↵<p>H3 первый объект из серии мебели Н3 реализованный нами и запущенный в производство.</p>↵<p>Яркие цвета и характерные элементы стула, такие как ушки на спинке стула и перекрестие у основания ножек делают стул запоминающимся.</p>↵↵<div class="grid-part">↵	<img src="https://s3.eu-west-2.amazonaws.com/lineform/big_1518861098420_604.jpg" class="grid" alt="">↵	<img src="https://s3.eu-west-2.amazonaws.com/lineform/big_1518861107526_415.jpg" class="grid" alt="">↵	<img src="https://s3.eu-west-2.amazonaws.com/lineform/big_1518861110682_661.jpg" class="grid" alt="">↵	<img src="https://s3.eu-west-2.amazonaws.com/lineform/big_1518861113943_700.jpg" class="grid" alt="">↵	<img src="https://s3.eu-west-2.amazonaws.com/lineform/big_1518861118748_734.jpg" class="grid" alt="">↵	<img src="https://s3.eu-west-2.amazonaws.com/lineform/big_1518861125756_129.jpg" class="grid" alt="">↵</div>↵↵<div class="grid-part">↵	<img src="https://s3.eu-west-2.amazonaws.com/lineform/big_1518861178974_946.jpg" alt="" class="grid">↵	<img src="https://s3.eu-west-2.amazonaws.com/lineform/big_1518861183310_347.jpg" alt="" class="grid">↵	<img src="https://s3.eu-west-2.amazonaws.com/lineform/big_1518861184778_841.jpg" alt="" class="grid">↵	<img src="https://s3.eu-west-2.amazonaws.com/lineform/big_1518861187661_804.jpg" alt="" class="grid">↵	<img src="https://s3.eu-west-2.amazonaws.com/lineform/big_1518861193322_394.jpg" alt="" class="grid">↵	<img src="https://s3.eu-west-2.amazonaws.com/lineform/big_1518861195136_514.jpg" alt="" class="grid">↵	<img src="https://s3.eu-west-2.amazonaws.com/lineform/big_1518861199136_830.jpg" alt="" class="grid">↵</div>↵"
  title: "СТУЛ H3"
  buttonHref: "https://s3.eu-west-2.amazonaws.com/lineform/catalog.pdf"
  buttonLink: "Каталог мебели"

  
  this.props.data.category;
  this.props.data.firstImg;
  this.props.data.id;
  this.props.data.img;
  this.props.data.infoBlocks;
  this.props.data.replacedImgUrl;
  this.props.data.summary;
  this.props.data.text;
  this.props.data.title;
  this.props.data.buttonHref;
  this.props.data.buttonLink;
  */

  render() {
    const imgUrl = this.props.data.img;
    return (
      <div className="preview">
        <div className="preview__img-container">
          <img className="preview__img" src={imgUrl} />
        </div>
        <h3 className="preview__title">{this.props.data.title}</h3>
        <h5 className="preview__info">{this.props.data.category}</h5>
      </div>
    );
  }
}

export default Preview;

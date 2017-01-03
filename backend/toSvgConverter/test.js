const sqip = require('sqip');

const imageConverResult = sqip({
	filename: './1.jpg',
	numberOfPrimitives: 120
});

console.log(imageConverResult.svg_base64encoded);
	

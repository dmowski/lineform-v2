const nodemailer = require('nodemailer');
const errors = require('../errors/errors');
const fs = require('fs');

exports.sendEmailText = function(toEmail, title, message, attachments) {
	return new Promise((resolve, reject) => {
		let transporter = nodemailer.createTransport({
			host: 'smtp.yandex.com',
			port: 465,
			secure: true, // secure:true for port 465, secure:false for port 587
			auth: {
				user: 'lineform.contact@yandex.ru',
				pass: 'blowyabJoybNaj3'
			}
		});
		let mailOptions = {
			from: '"Lineform Site Contact 👻" <lineform.contact@yandex.ru>',
			to: toEmail,
			subject: title,
			text: message,
			html:  message
		};

		if (attachments) {
			mailOptions.attachments = attachments;
		}
		console.log(mailOptions);
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.error(error);
				return reject(new errors.internal());
			} else {
				resolve();
			}
		});
	});
}

exports.sendMessage = function(request, response, next) {
	let message = String(request.body.message);
	let contact = String(request.body.contact);
	let name = String(request.body.name);

	message = `
		Oт: ${contact}  (${name})
		Сообщение: ${message}
	`;

	let sendResult = this.sendEmailText('dmowski@yandex.ru', `Сообщение на сайте Lineform (Контакт: ${contact})`, message);
	let sendResult2 = this.sendEmailText('info@lineform.by', `Сообщение на сайте Lineform (Контакт: ${contact})`, message);

	Promise.all([sendResult2, sendResult]).then(()=> {
		response.status(200).json({
			'send': 'ok'
		});
	}).catch((resultErre)=>{
		console.error(resultErre);
		return next(resultErre);
	})
}

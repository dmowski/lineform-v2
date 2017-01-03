import { Component } from '@angular/core';
import baseService from '../../services/base.service';
import { Http } from '@angular/http';

@Component({
	moduleId: module.id,
	selector: 'contacts',
	templateUrl: './template.html',
})

export class contactsViewAppComponent {
	sendMessage(message, contact, name) {
		if(contact.value.length < 2 || message.value.length < 2 || name.value.length < 2) {
			alert('Перед отправкой сообщения, заполните все поля');
			return;
		}

		let data = {
			message: message.value,
			contact: contact.value,
			name: name.value,
		};

		var postResult = this.http.post(baseService.getBaseUrl() + 'api/v1/sendMessage', data).toPromise();
		postResult.then((res) => {
			alert('Ваше сообщение успешно отправленно');
		});

		postResult.catch((err) => {
			console.log(err)
			alert('Програмная ошибка: Ваше сообщение не отправленно');
		});
	}

	constructor(private http: Http) {
		document.title = "Контакты [LineForm]";
	}
}

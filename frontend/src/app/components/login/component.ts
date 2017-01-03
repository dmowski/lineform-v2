import { Component } from '@angular/core';
import baseService from '../../services/base.service';
import { Http } from '@angular/http';

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: './template.html'
})

export class loginAppComponent {
	isAuth: boolean;

	constructor(private http: Http) {
		this.isAuth = false;
	}

	checkHash(hash?: string) {
		var postResult = this.http.post(baseService.getBaseUrl() + 'api/v1/auth', {hash:hash}).toPromise();
		postResult.then((res) => {
			localStorage.setItem('hash', hash);
			this.isAuth = true;
		});

		postResult.catch((err) => {
			console.log(err)
			alert('Error!!');
		});
	}

	ngOnInit() {
		if(localStorage.getItem('hash')) {
			this.checkHash(localStorage.getItem('hash'));
		}
	}

	enter(password) {
		this.checkHash(password.value);
	}
}

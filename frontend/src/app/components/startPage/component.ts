import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'start-page',
	templateUrl: './template.html'
})

export class startPageAppComponent {
	public config: any;
	ngOnInit() {
		var doc = document.getElementById('startPageComponent');
		doc.style.height = window.innerHeight + 'px';
	}

	down() {
		document.getElementById('main-main-menu').scrollIntoView();
	}

	constructor() {
		this.config = {
			loaded: false,
			loaded2: false
		}
	}
}

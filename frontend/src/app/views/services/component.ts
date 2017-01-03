import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'services',
	templateUrl: './template.html',
})

export class servicesViewAppComponent {
	constructor() {
		document.title = "Услуги [LineForm]";
	}
}

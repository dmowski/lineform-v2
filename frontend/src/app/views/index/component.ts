import { Component } from '@angular/core';
import { project } from '../../interfaces/project';

@Component({
	moduleId: module.id,
	selector: 'index',
	templateUrl: './template.html',
})

export class indexViewAppComponent {
	constructor() {
		setTimeout(function () {
			document.title = "Главная [LineForm]";
		}, 100);
	}
}

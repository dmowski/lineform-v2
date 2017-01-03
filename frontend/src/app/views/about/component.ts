import { Component } from '@angular/core';
import { footerAppComponent }  from '../../components/footer/component';
import { mainMenuAppComponent }  from '../../components/mainMenu/component';

@Component({
	moduleId: module.id,
	selector: 'about',
	templateUrl: './template.html',
})

export class aboutViewAppComponent {
	constructor() {
		document.title = "О нас [LineForm]";
	}
}

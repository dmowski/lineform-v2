import { Input, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'main-menu',
	templateUrl: './template.html'
})

export class mainMenuAppComponent {
	@Input() fixed: boolean;
	@Input() white: boolean;
	curentPage: string;
	
	constructor(private router:Router) {
		this.curentPage = this.router.url;
	}
}

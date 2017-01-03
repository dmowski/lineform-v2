import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	constructor(private router: Router) {
		window.document.getElementById('loadingPreview').style.opacity = '0';

		setTimeout(function() {
			window.document.getElementById('loadingPreview').style.display = 'none';
		}, 200);
	}

	ngOnInit() {
		this.router.events.subscribe((evt) => {
			if (!(evt instanceof NavigationEnd)) {
					return;
			}
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;

		});
	}
}

import { Input, Component } from '@angular/core';
import { news } from '../../interfaces/news';
import { Router } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'small-news',
	templateUrl: './template.html'
})

export class smallNewsAppComponent {
	@Input() news: news;
	@Input() admin: boolean;
	public config: any;
	constructor(private router:Router) {
		this.config = {
			loaded: false
		};
	}

	openFullNews() {
		if (this.admin) {
			this.router.navigate(['admin/news', this.news.id]);
		} else {
			this.router.navigate(['news', this.news.id]);
		}
	}
}

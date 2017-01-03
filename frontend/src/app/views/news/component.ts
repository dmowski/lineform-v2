import { Input, Component, Pipe } from '@angular/core';
import { news } from '../../interfaces/news';
import { newsService } from '../../services/news.service';

import { mainMenuAppComponent }  from '../../components/mainMenu/component';

@Component({
	moduleId: module.id,
	selector: 'news',
	templateUrl: './template.html',
	providers: [newsService]
})
export class newsViewAppComponent {
	@Input() simple: boolean;
	@Input() admin: boolean;
	limitObjects: number;
	canShowMoreButton: boolean;
	newsList: news[];

	ngOnInit(){
		this.newsList = this.newsService.getNews();

		if (this.simple) {
			this.limitObjects = 3;
		}

		if (this.admin) {
			this.limitObjects = 9000000;
		}

		if(!this.admin && !this.simple) {
			this.limitObjects = 4;
		}

		if (this.limitObjects >= this.newsList.length) {
			this.canShowMoreButton = false;
		}
	}

	constructor(private newsService: newsService) {
		this.canShowMoreButton = true;
	}

	moreObjects(){
		this.limitObjects+=3;
		if (this.limitObjects >= this.newsList.length) {
			this.canShowMoreButton = false;
		}
	}
}

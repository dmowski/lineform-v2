import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { news } from '../../interfaces/news';
import { newsService } from '../../services/news.service';

@Component({
	moduleId: module.id,
	selector: 'one-news',
	templateUrl: './template.html',
	providers: [newsService],
})

export class oneNewsViewAppComponent {
	news: news;
	@Input() simple: boolean;

	@Input() newsData: news;


	ngOnInit() {
		if (this.simple && this.newsData) {
			this.news = this.newsData;
		} else {
			this.news = this.newsService.getNewsById(this.route.snapshot.params.id);
		}
	}

	closeProject() {
		if (!this.simple) {
			this.router.navigate(['news']);
		}
	}

	constructor(private newsService: newsService, private route: ActivatedRoute, private router:Router) {
	}
}

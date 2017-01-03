import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { projectsService } from '../../services/projects.service';
import { project, infoBlock } from '../../interfaces/project';

import { newsService } from '../../services/news.service';
import { news } from '../../interfaces/news';


@Component({
	moduleId: module.id,
	selector: 'admin',
	templateUrl: './template.html',
	providers: [projectsService, newsService],
})

export class adminViewAppComponent {
	constructor(private router:Router, private projectsService: projectsService, private newsService: newsService) {
		
	}

	ngOnInit(){
		this.projectsService.getProjects(true);
		this.newsService.getNews(true);
	}
}

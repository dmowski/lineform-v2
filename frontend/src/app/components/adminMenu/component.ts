import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { projectsService } from '../../services/projects.service';
import { project, infoBlock } from '../../interfaces/project';

import { newsService } from '../../services/news.service';
import { news } from '../../interfaces/news';


@Component({
	moduleId: module.id,
	selector: 'admin-menu',
	templateUrl: './template.html',
	providers: [projectsService, newsService],
})

export class adminMenuAppComponent {
	isOpen:boolean;

	constructor(private router:Router, private projectsService: projectsService, private newsService: newsService) {
		this.isOpen = false;
	}

	addNews() {
		var id = this.newsService.createNew();
		this.router.navigate(['admin/news', id]);
	}

	logout(){
		localStorage.clear();
		location.reload();
	}

	ngOnInit(){
		this.projectsService.getProjects(true);
		this.newsService.getNews(true);
	}

	addProject() {
		var id = this.projectsService.createNew();
		this.router.navigate(['admin/project', id]);
	}
}

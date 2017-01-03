import { Injectable } from '@angular/core';
import baseService from './base.service';
import { Http } from '@angular/http';
import { project, infoBlock, lineValue } from '../interfaces/project';

@Injectable()
export class projectsService {
	projects: project[];
	myFile: string;
	dataUrl: string;
	updateUrl: string;

	constructor(private http: Http) {
		this.dataUrl = baseService.getAPIUrl() + 'projects';
		this.updateUrl = baseService.getAPIUrl() + 'projects';
	}

	getProjectById(id:string, clearCache?: boolean) {
		let obj;
		this.getProjects().forEach((item) => {
			if (item.id === id) {
				obj = item;
			}
		});
		return obj;
	}

	createNew() {
		var templateProj = this.getTemplateProject();
		this.projects.push(templateProj);
		this.saveProjects();
		this.getProjects();
		return templateProj.id;
	}

	getTemplateProject() {
		var projectObject = <project>{};

		var projectLineValue = <lineValue>{};
		projectLineValue.value = 'templateValue';

		var projectInfoBlock = <infoBlock>{};
		projectInfoBlock.title = 'Block';
		projectInfoBlock.lines = [];
		projectInfoBlock.lines.push(projectLineValue);
		
		projectObject.id = String(Date.now());
		projectObject.img = '';
		projectObject.title = 'title';
		projectObject.category = 'category';
		projectObject.summary = 'summary';
		projectObject.text = '<p>Абзац</p>\n\r<h2>Заголовок</h2>';
		projectObject.firstImg = 'null';

		projectObject.infoBlocks = [];
		projectObject.infoBlocks.push(projectInfoBlock);

		return projectObject;
	}

	getCategories() {
		var listString = [];
		this.getProjects().forEach((item) => {
			if(listString.indexOf(item.category.toUpperCase()) == -1) {
				listString.push(item.category.toUpperCase())
			}
		});
		return listString;
	}

	saveProjects() {
		var projectsToSave = JSON.parse(JSON.stringify(this.projects));
		if (baseService.isDevTools) {
			projectsToSave.forEach((project) => {
				project = baseService.removeImgUrlFromProject(project);
			})
		}

		var postResult = this.http.post(this.updateUrl, {
			projects: JSON.stringify(projectsToSave),
			hash: localStorage.getItem('hash')
		}).toPromise();
		return postResult;
	}

	deleteProject(id: string){
		var arrIndex = this.projects.findIndex(function(item) {return item.id === id;});
		if(arrIndex == -1) return;
		this.projects = this.projects.slice(0,arrIndex).concat(this.projects.slice(arrIndex + 1));
		this.saveProjects();
	}

	updateProject(project) {
		project = baseService.removeImgUrlFromProject(project);
		project = baseService.addImgUrlFromProject(project);
		return project;
	}

	updateProjects() {
		if (this.projects) {
			this.projects.forEach((project) => {
				project = this.updateProject(project);
			});
		}
	}

	getProjects(clearCache?: boolean) {
		if (!this.projects || clearCache == true) {
			var projectsRequest = new XMLHttpRequest();
			var salt = (clearCache) ? "?asd=" + String(Date.now()) : '';

			projectsRequest.open('GET', this.dataUrl + salt, false);
			projectsRequest.send();
			if (projectsRequest.status !== 200) {
				this.projects = [];
			} else {
				this.projects = JSON.parse(projectsRequest.responseText);
			}

			this.updateProjects();
		}

		return this.projects;
	}
}

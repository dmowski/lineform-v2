import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

import { ActivatedRoute, Router } from '@angular/router';
import { project } from '../../interfaces/project';
import { projectsService } from '../../services/projects.service';
import {PipeTransform, Pipe} from "@angular/core";

@Pipe({ name: 'safeHtml'})
@Component({
	moduleId: module.id,
	selector: 'one-project',
	templateUrl: './template.html',
	providers: [projectsService],
})
export class oneProjectViewAppComponent {
	project: project;

	@Input() simple: boolean;
	@Input() projectData: project;

	public config: any;

 	transformHtml(value) {
    	return this.sanitized.bypassSecurityTrustHtml(value);
  	}
	ngOnInit() {
		var doc = document.getElementById('startPageComponent');
		doc.style.height = window.innerHeight + 'px';

		if (this.simple && this.projectData) {
			this.project = this.projectData;
		} else {
			this.project = this.projectsService.getProjectById(this.route.snapshot.params.id);
		}

		document.title = this.project.title + "(" + this.project.summary + ") [LineForm]";
	}

	closeProject() {
		if (!this.simple) {
			this.router.navigate(['projects']);
		}
	}

	constructor(private projectsService: projectsService, private route: ActivatedRoute, private router:Router, private sanitized: DomSanitizer) {
		document.title = "Проект [LineForm]";
		this.config = {
			loaded: false
		};
	}
}

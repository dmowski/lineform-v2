import { Input, Component } from '@angular/core';
import { project } from '../../interfaces/project';
import { projectsService } from '../../services/projects.service';

@Component({
	moduleId: module.id,
	selector: 'projects',
	templateUrl: './template.html',
	providers: [projectsService]
})

export class projectsViewAppComponent {
	@Input() simple: boolean;
	@Input() admin: boolean;

	projects: project[];
	categories: string[];
	curentCategory: string;

	constructor(private projectsService: projectsService) {
		document.title = "Проекты [LineForm]";
		this.curentCategory = 'all';
		this.projects = projectsService.getProjects();
		this.categories = projectsService.getCategories();
	}
}


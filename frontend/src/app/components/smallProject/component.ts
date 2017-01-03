import { Input, Component } from '@angular/core';
import { project } from '../../interfaces/project';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'small-project',
	templateUrl: './template.html'
})

export class  smallProjectAppComponent{
	@Input() project: project;
	@Input() admin: boolean;
	public config: any;
	img: any;
	imgContainer: any;
	originImgSize: any;
	centerImgPositionEventhandler: any;

	constructor(private router:Router) {
		this.config = {};
		this.originImgSize = {
			width: 0,
			height: 0,
		};

		this.config.loaded = false;
		this.centerImgPositionEventhandler =this.centerImgPosition.bind(this);
		window.addEventListener('resize', this.centerImgPositionEventhandler);
	}

	getLink(project) {
		if (!project || !project.id) {
			return;
		}

		if (this.admin) {
			return '/#/admin/project/' + project.id;
		} else if (!project.workInProgress){
			return '/#/project/' + project.id;
		}
	}
	ngOnDestroy() {
		window.removeEventListener('resize', this.centerImgPositionEventhandler);
	}
	centerImgPosition(e) {
		this.img = (e && e.target.tagName == 'IMG') ? e.target : this.img;
		if (!this.img) {
			return;
		}

		this.imgContainer = (this.img) ? this.img.parentElement : this.imgContainer;

		if (this.originImgSize.width === 0) {
			this.originImgSize.width = this.img.width;
			this.originImgSize.height = this.img.height;
		}

		this.img.style.top = '0';
		this.img.style.left = '0';
		this.img.width = this.originImgSize.width;
		this.img.height = this.originImgSize.height;

		let imgHeight = this.img.height;
		let imgWidth = this.img.width;
		let containerHeight = this.imgContainer.offsetHeight;
		let containerWidth = this.imgContainer.offsetWidth;

		if (containerWidth/containerHeight >= imgWidth/imgHeight) {
			this.img.width = containerWidth;
			this.img.height = this.originImgSize.height * (containerWidth/this.originImgSize.width);
			this.img.style.top = '-' + Math.round((this.img.height - containerHeight) / 2) + 'px';
		} else {
			this.img.height = containerHeight;
			this.img.width = this.originImgSize.width * (containerHeight/this.originImgSize.height);
			this.img.style.left = '-' + Math.round((this.img.width - containerWidth) / 2) + 'px';
		}
	}
}

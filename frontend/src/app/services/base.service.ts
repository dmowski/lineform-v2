import { environment } from '../../environments/environment';

let baseurl = '/';
let isDevTools = false;

if (!environment.production) {
	baseurl = 'http://localhost:1488/';
	isDevTools = true;
}

let baseService = {
	getBaseUrl: function () {
		return baseurl;
	},
	isDevTools: function () {
		return isDevTools;
	},
	replaceImgUrls: function (text) {
		return text.split('/img/').join(this.getBaseUrl() + 'img/');
	},
	removeImgUrls: function (text) {
		return text.split(this.getBaseUrl() + 'img/').join('/img/');
	},
	getAPIUrl: function () {
		return this.getBaseUrl() + 'api/v1/';
	},
	addImgUrlFromProject: function (project) {
		project.text = baseService.replaceImgUrls(project.text);
		project.img = baseService.replaceImgUrls(project.img);
		project.firstImg = baseService.replaceImgUrls(project.firstImg);
		project.replacedImgUrl = true;
		return project;
	},
	removeImgUrlFromProject: function (project) {
		project.text = this.removeImgUrls(project.text);
		project.img = this.removeImgUrls(project.img);
		project.firstImg = this.removeImgUrls(project.firstImg);
		project.replacedImgUrl = false;
		return project;
	}
}

export default baseService;

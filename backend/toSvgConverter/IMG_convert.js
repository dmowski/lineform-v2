const helper = require('./IMG_helper');
const sqip = require('sqip');

var projects;
var svgData = {};
helper.clearImgFolder().then(() => {
	return Promise.all([
		helper.getJson(helper.projectsUrl)
	])
})
.then(function(result) {
	projects = result[0] || [];
}).then(function() {
	projects.forEach(function(project) {
		svgData = Object.assign(helper.getImagesFromProject(project), svgData);
	});
}).then(function () {
	let listOfDownloads = [];
	for (var prop in svgData) {
		if (svgData.hasOwnProperty(prop) && svgData[prop] === null && prop !== null && prop !== "null") {
			let resultDownload = helper.download(prop, './img/' + prop.split('/').slice(-1)[0])
			resultDownload = resultDownload.catch((url)=>{
				delete svgData[prop];
			});
			listOfDownloads.push(resultDownload);
		}
	}
	return Promise.all(listOfDownloads);
}).then(function () {
	for (var prop in svgData) {
		if (svgData.hasOwnProperty(prop) && svgData[prop] === null && prop !== null && prop !== "null") {
			const imageConverResult = sqip({
				filename: './img/' + prop.split('/').slice(-1)[0],
				numberOfPrimitives: helper.numberOfPrimitives
			});
			console.log("sqip DONE: ", prop);
			svgData[prop] = imageConverResult.svg_base64encoded;
		}
	}
}).then(function () {
	projects.forEach(function (project) {
		helper.updateImagesFromProject(project, svgData);
	});
}).then(() => {
	console.log('projects');
	console.log(projects);
	return helper.pushProjects(projects);
}).then(() => {
	helper.clearImgFolder();
	console.log('\x1b[42m                             \x1b[0m');
	console.log('\x1b[42m  %s\x1b[0m', 'Build All Images           ');
	console.log('\x1b[42m                             \x1b[0m');
});

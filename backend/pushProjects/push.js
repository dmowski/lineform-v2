var request = require('request');
var fs = require('fs');
var projectsPath = './projects.json';
var urlSite = "";
urlSite = "https://lineform.herokuapp.com/";

var projects = [];

if (!fs.existsSync(projectsPath)) {
	console.log('projects 404. FILE=' + projectsPath);
	return;
}

fs.readFile(projectsPath, 'utf8', (err, data) => {
	if (data) {
		projects = JSON.parse(data);
	} else {
		return;
	}

	var postObject = {
		method: 'POST',
		url: urlSite + 'api/v1/projects',
		form: {
			projects: JSON.stringify(projects),
			hash: '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2'
		}
	};


	request.post(postObject, function(error, response, body) {
		if ( response.statusCode === 500 || response.statusCode === 200 ) {
			console.log(JSON.stringify(projects));
		} else {
			console.log('err', response);
			console.log('error');
		}
		console.log('response.statusCode', response.statusCode);
	});
});

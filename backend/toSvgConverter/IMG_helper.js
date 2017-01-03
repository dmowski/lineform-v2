var request = require('request');
var urlSite = "https://lineform.herokuapp.com/";
var projectsUrl = urlSite + "api/v1/projects";

var cheerio = require('cheerio');
var rmdir = require('rmdir');
var fs = require('fs');
var rimraf = require('rimraf');
var sizeOfImage = require('image-size');

module.exports = {
	numberOfPrimitives: 3,
	projectsUrl:  projectsUrl,
	clearImgFolder: function () {
		return new Promise(function (resolve, rej) {
			rimraf('./img', function (err) {
				setTimeout(function() {
					fs.mkdirSync('./img');
					resolve();
				}, 100);
			});
		});
	},
	download: function(url, filename){
		return new Promise(function(resolve, rej) {
		  request.head(url, function(err, res, body){
				if (res.statusCode === 404) {
					return rej(url);
				}
				console.log('url:', url);
			    console.log('content-type:', res.headers['content-type']);
			    console.log('content-length:', res.headers['content-length']);
			    request(url).pipe(fs.createWriteStream(filename)).on('close', resolve);
		  });
	    });
	},
	getImagesFromProject: function (project) {
		let content = project.text;
		let $ = cheerio.load(content);
		var imgObject = {};
		$('img').each((i, image) => {
			imgObject[image.attribs.src] = null;
		});
		return imgObject;
	},
	updateImagesFromProject: function (project, svgData) {
		let content = project.text;
		let $ = cheerio.load(content);
		$('img').each((i, image) => {
			var svgImageData = svgData[image.attribs.src];
			if (svgImageData) {
				image.attribs.style = `background-size: cover; background-image: url(data:image/svg+xml;base64,${svgImageData});`;
			}
		});
		project.text = $('body').html();
	},
	getJson: function (url) {
		return new Promise(function (res, rej) {
			request.get(url, function (error, response, body) {
				if (!error && response.statusCode == 200) {
					res(JSON.parse(body));
				} else {
					res();
				}
			});
		});
	},
	pushProjects: function (projects) {
		return new Promise(function (res, rej) {
			var postObject = {
				method: 'POST',
				url: urlSite + 'api/v1/projects',
				form: {
					projects: JSON.stringify(projects),
					hash: '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2'
				}
			};

			request.post(postObject, function(error, response, body) {
				if ( response.statusCode === 500 ||  response.statusCode === 200) {
					console.log(JSON.stringify(projects));
				} else {
					console.log('err', response);
				}

				console.log('response.statusCode', response.statusCode);
				res();
			});
		});
	}
}

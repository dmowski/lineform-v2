const errors = require('../errors/errors');
const fs = require('fs');
const config = require('../config/config');
const requestLib = require('request');
const AWS = require('aws-sdk');
const backupController = require('./backupController');

AWS.config.update({
	accessKeyId: config.aws.accessKeyId,
	secretAccessKey: config.aws.secretAccessKey
});

exports.update = function(request, response, next) {
	if (!request || !request.body || !request.body.projects) {
		return next(new errors.badRequest());
	}
	var projects = request.body.projects;
	var base64data = Buffer.from(projects, 'binary');
	var s3 = new AWS.S3();
	s3.putObject({
			Bucket: 'lineform',
			Key: 'projects.json',
			Body: projects,
			ACL: 'public-read'
		}, (err, resp) => {
			if (resp) {
				var result = {update: 'ok'};
				backupController.createBackups(projects).then(() => {
					console.log('backupController.createBackups Good');
					result.errorOnBackups = false;
				}).catch(() => {
					console.log('backupController.createBackups Bad');
					result.errorOnBackups = true;
				}).then(() => {
					return response.status(200).json(result);
				});
			} else {
				return next(new errors.internal('AWS: Write file = ' + err));
			}
		}
	);
};

exports.get = function(request, response, next) {
	var url = config.projectsUrlStoroge;
	requestLib.get(url, function(error, res, body) {
		var projects = [];
		console.log('body', body);
		if (!error && res.statusCode == 200) {
			projects = JSON.parse(body);
		}
		response.status(200).json(projects);
	});
};

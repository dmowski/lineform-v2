var baseDataUrlStoroge = "https://s3.eu-west-2.amazonaws.com/lineform/";
var projectsUrlStoroge = baseDataUrlStoroge + "projects.json";

var config = {
	serverPort: process.env.PORT || 1488,
	baseDataUrlStoroge: baseDataUrlStoroge,
	projectsUrlStoroge: projectsUrlStoroge,
	emailLogin: process.env['EMAIL_LOGIN'],
	emailPassword: process.env['EMAIL_PASSWORD'],
	aws: {
		accessKeyId: process.env['AWS_ACCESS_KEY_ID'],
		secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'],
		bucketName: process.env['S3_BUCKET_NAME']
	}
};

module.exports = config;

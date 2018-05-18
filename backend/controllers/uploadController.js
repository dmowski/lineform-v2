const config = require('../config/config');
const sizeOf = require("image-size");
const sharp = require("sharp");
const AWS = require("aws-sdk");
const fs = require("fs");

AWS.config.update({
	accessKeyId: config.aws.accessKeyId,
	secretAccessKey: config.aws.secretAccessKey
});

exports.saveImg = function(req, res) {
	var randomNumber = Math.round(Math.random() * 1000);
	var extname = require("path").extname(req.file.originalname);

	var clearName = req.file.originalname.replace(/[^A-Za-z0-9]/g,'=').slice(0, -4);

	var nameFile = Date.now() + "_" + randomNumber + "_(" + clearName + ")" + extname;

	var bigNameFile = "big_" + nameFile;
	var smallNameFile = "small_" + nameFile;

	var fileFullPath = __dirname + "/../data/img/full/" + nameFile;
	var fileSmallPath = __dirname + "/../data/img/mini/" + nameFile;

	function returnOk() {
		var dimensions = sizeOf(fileFullPath);
		var result = {
			message: "File uploaded successfully",
			filename: nameFile,
			//miniUrlFile: "/img/mini/" + nameFile,
			//urlFile: "/img/full/" + nameFile,
			height: dimensions.height,
			width: dimensions.width
		};

		result.miniUrlFile = config.baseDataUrlStoroge + smallNameFile;
		result.urlFile = config.baseDataUrlStoroge + bigNameFile;
		console.log("result", result);
		res.json(result);
	}

	function catchError(err) {
		console.log(err);
		res.json({
			error: "Error",
			error_message: err
		});
	}

	function pushToAWS(filePatch, fileName) {
		return new Promise(function(res, rej) {
			fs.readFile(filePatch, function(err, data) {
				var base64data = new Buffer(data, "binary");
				var s3 = new AWS.S3();
				s3.putObject(
					{
						Bucket: config.aws.bucketName,
						Key: fileName,
						Body: base64data,
						ACL: "public-read"
					},
					function(err, resp) {
						if (resp) {
							res(resp);
						} else {
							rej(err);
						}
					}
				);
			});
		});
	}
	sharp(req.file.path)
		.resize(2000)
		.toFile(fileFullPath, (err, info) => {
			if (err) {
				return catchError(err);
			}
			sharp(fileFullPath)
				.resize(800)
				.toFile(fileSmallPath, (err, info) => {
					if (err) {
						return catchError(err);
					}
					var pushSmall = pushToAWS(fileSmallPath, smallNameFile);
					var pushBig = pushToAWS(fileFullPath, bigNameFile);

					Promise.all([pushSmall, pushBig]).then(() => {
						debugger;
						returnOk();
					}).catch((error)=>{
						debugger;
						return catchError(error);
					});
				});
		});
};

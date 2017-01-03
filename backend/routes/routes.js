var express = require('express');
var router = express.Router();

var uploadController = require('../controllers/uploadController');
var authController = require('../controllers/authController');
var isAuthenticated = require('../middleware/isAuthenticated');
var emailController = require('../controllers/emailController');
var projectsController = require('../controllers/projectsController');


var upload = require('../middleware/upload');

router.post('/files', isAuthenticated, upload.uploadImgToTmp.single('file'), uploadController.saveImg)
router.post('/auth', isAuthenticated, authController.auth);
router.post('/sendMessage', emailController.sendMessage);
router.post('/projects', isAuthenticated, projectsController.update);
router.get('/projects', projectsController.get);

exports.router = router;

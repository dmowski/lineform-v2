var multer = require('multer');
var path = require('path');
exports.uploadImgToTmp = multer({
  dest: '/tmp/',
  fileFilter: function (req, file, cb) {
  	var filetypes = /jpeg|jpg|png|gif/;
    var mimetype = filetypes.test(file.mimetype);
    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("Error: File upload only supports the following filetypes - " + filetypes);
  }
})

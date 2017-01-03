const fs = require('fs');
var projectsPath = __dirname + '/data/projects.json';
var projectsPathBacups = __dirname + '/data/projects2.json';
if (!fs.existsSync(projectsPathBacups)) {
	console.log('not fnd');
  return;
}

fs.createReadStream(projectsPathBacups).pipe(fs.createWriteStream(projectsPath));
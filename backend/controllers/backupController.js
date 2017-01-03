const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');
const zipFolder = require('zip-folder');
const emailController = require('./emailController');
const rimraf = require('rimraf');

const backupZipPath = __dirname + '/../../backup.zip';
const backupFolder = __dirname + '/../../img/';

function helperDownload(url, filename) {
    return new Promise(function (resolve, rej) {
        request.head(url, function (err, res, body) {
            if (!res || res.statusCode === 404) {
                return rej(url);
            }
            console.log('url:', url);
            request(url).pipe(fs.createWriteStream(filename)).on('close', resolve);
        });
    });
}

function clearBackupFolder(createFolder) {
    if (fs.existsSync(backupZipPath)) {
        fs.unlinkSync(backupZipPath);
    }
    return new Promise(function (resolve, rej) {
        rimraf(backupFolder, function (err) {
            setTimeout(function () {
                if (createFolder === true) {
                    fs.mkdirSync(backupFolder);
                }
                resolve();
            }, 100);
        });
    });
}

exports.createBackups = function (projectsStr) {
    let projects = JSON.parse(projectsStr);
    let listImg = [];
    projects.forEach((project) => {
        let content = project.text;
        let $ = cheerio.load(content);
        $('img').each((i, image) => {
            listImg.push(image.attribs.src)
        });
        listImg.push(project.img);
        listImg.push(project.firstImg);
    });
    listImg = listImg.filter((src) => { return src.length > 4 })
    listImg = [...new Set(listImg)];
    return clearBackupFolder(true).then(() => {
        fs.writeFileSync(backupFolder + 'projects.json', projectsStr);
        let listOfDownloads = listImg.map((imgSrc) => {
            return helperDownload(imgSrc, backupFolder + imgSrc.split('/').slice(-1)[0])
        })
        return Promise.all(listOfDownloads);
    }).then(() => {
        return new Promise(function (resolve, rej) {
            zipFolder(backupFolder, backupZipPath, function (err) {
                if (err) {
                    console.log('oh no! Error on zip folder', err);
                    rej();
                } else {
                    console.log('Zip is done');
                    resolve();
                }
            });
        });
    }).then(() => {
        const attachments = [
            {
                filename: 'backup.zip',
                content: fs.createReadStream(backupZipPath)
            }
        ];
        let message = 'Backup: ' + new Date();
        return emailController.sendEmailText('dmowski@yandex.ru', 'bacups (LineForm)', message, attachments);
    }).then(clearBackupFolder).catch(clearBackupFolder);
}

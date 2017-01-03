import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { news } from '../../interfaces/news';
import { newsService } from '../../services/news.service';
import { fileService } from '../../services/file.service';

@Component({
	moduleId: module.id,
	selector: 'edit-news',
	templateUrl: './template.html',
	providers: [newsService, fileService],
})

export class editNewsAppComponent {
	oneNews: news;
	ngOnInit() {
		this.oneNews = this.newsService.getNewsById(this.route.snapshot.params.id, true);
	}

	tabSwitch(showBlock, hideBlock) {
		showBlock.style.display = 'none';
		hideBlock.style.display = 'block';
	}

    uploadMiniImg(fileSelect){
        var file = fileSelect.files[0];
        var result = this.fileService.uploadFile(file);
        result.then((result) => {
            if (result.miniUrlFile) {
            	this.oneNews.img = result.miniUrlFile;
            }
        });
    }

    deleteNews() {
        if (confirm('Delete news?')) {
            this.newsService.deleteNews(this.oneNews.id);
            this.router.navigate(['admin']);
        }
    }
    addImgToText(fileSelect, isSmall){
        var file;
        for (var i = fileSelect.files.length - 1; i >= 0; i--) {
            file = fileSelect.files[0];
            var result = this.fileService.uploadFile(file);
            var imgClass = (isSmall) ? 'class="small" ' : 'class="full" ';
            result.then((result) => {
                if (result.urlFile) {
                    this.oneNews.text += '\r\n \r\n<img src="' + result.urlFile + '" alt="" ' + imgClass + '>';
                }
            })
        }

        fileSelect.value = '';
    }

	saveNews() {
		this.newsService.saveAllNews();
        alert('Новость сохранена');
	}

	constructor(private newsService: newsService, private route: ActivatedRoute, private router:Router, private fileService:fileService) {
	}
}

import { Injectable, isDevMode } from '@angular/core';
import baseService from './base.service';
import { Http } from '@angular/http';
import { news } from '../interfaces/news';

@Injectable()
export class newsService {
	news: news[];
    newsUrl: string;

    constructor(private http: Http) {
        this.newsUrl = baseService.getBaseUrl() + 'news.json';
    }

    getNewsById(id:string, clearCache?: boolean) {
    	let obj;
    	this.getNews(clearCache).forEach((item) => {
    		if (item.id === id) {
    			obj = item;
    		}
    	});
    	return obj;
    }

    createNew() {
        var templateNews = this.getTemplateProject();
        this.news.push(templateNews);
        this.saveAllNews();
        this.getNews();
        return templateNews.id;
    }

    getTemplateProject() {
        var newsObject = <news>{};

        newsObject.img = 'null';
        newsObject.title = 'title'
        newsObject.date = 'Date';
        newsObject.id = String(Date.now());
        newsObject.summary = 'summary';
        newsObject.text = 'text';
        return newsObject;
    }

    saveAllNews() {
        var newssRequest = new XMLHttpRequest();
        newssRequest.open('POST', '/api/updateNews.php', false);
        var data = new FormData();
        data.append('news', JSON.stringify(this.news));
        data.append('hash', localStorage.getItem('hash'));
        newssRequest.send(data);
        console.log(newssRequest.responseText);
    }

    deleteNews(id: string){
        var arrIndex = this.news.findIndex(function(item) {return item.id === id;});
        if(arrIndex == -1) return;
        this.news = this.news.slice(0,arrIndex).concat(this.news.slice(arrIndex + 1));
        this.saveAllNews();
    }

    getNews(clearCache?: boolean) {
        return [];
    	/*if (!this.news || clearCache) {
    		var newsRequest = new XMLHttpRequest();

            var salt = (clearCache) ? "?asd=" + String(Date.now()) : '';

    		newsRequest.open('GET', this.newsUrl + salt, false);
			newsRequest.send();
			this.news = JSON.parse(newsRequest.responseText);
    	}

    	return this.news;*/
    }
}

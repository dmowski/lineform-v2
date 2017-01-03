import {Injectable} from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import baseService from './base.service';

@Injectable()
export class fileService {
    fileUrl: string;

    constructor(private http: Http) {
        this.fileUrl = baseService.getAPIUrl() + 'files'
    }

    uploadFile(file) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('hash', localStorage.getItem('hash'));

        let options = new RequestOptions();

        //TODO:refactoring
        var parameters = new URLSearchParams();
        parameters.append('hash', localStorage.getItem('hash'));
        options.params = parameters;

        var postResult = this.http.post(this.fileUrl, formData, options).toPromise();

        return postResult.then((res) => {
            var result = res.json();
            return result;
        });
    };
}

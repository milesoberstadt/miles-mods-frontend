import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Blog } from './blog';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlogService {
    private _blogUrl = "http://127.0.0.1:4000/blogs";
    
    constructor(private _http:Http){
    }

    getBlogs():Observable<Blog[]>{
        return this._http.get(this._blogUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response){
        // Convert to a JSON object or return an empty obj
        let body = res.json();
        return body || {};
    }

    private handleError(error:Response | any){
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } 
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
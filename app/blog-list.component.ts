import {Component, OnInit} from "@angular/core";
import {BlogService} from "./blog.service";
import {Blog} from "./blog";

@Component({
    selector: 'blog-list',
    templateUrl: 'app/blog-list.component.html',
    styles: [`
        div.card{
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
            padding: 25px;
            margin: 20px 0 20px 0;
        }
    `]
})

export class BlogList implements OnInit {
    blogs: Blog[];
    errorMessage: string;

    constructor (private _blogService:BlogService){
    }

    ngOnInit() {
        this.getBlogs();
    }

    getBlogs(){
        this._blogService.getBlogs()
            .subscribe(
                blogs => this.blogs = blogs,
                error => this.errorMessage = <any>error
            );
    }

}
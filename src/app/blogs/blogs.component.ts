import { Component, OnInit } from '@angular/core';
import { BlogService} from '../services/blog.service';
 import{ blog} from '../blog';

// import{BLOGS} from '../mock-blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  public Blogs = [];



  constructor( private _BlogService : BlogService) { }

  ngOnInit() {
    this.Blogs = this._BlogService.getBlogs();
  }
 
  selectedBlog = this._BlogService.getBlogs();

  onSelect(Blogs: BlogService): void {
    this.selectedBlog = Blogs;
  }
}

import { Component, OnInit } from '@angular/core';

import{ blog} from '../blog';

import{BLOGS} from '../mock-blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs = BLOGS;

  selectedBlog: blog;


  constructor() { }

  ngOnInit() {
  }

  onSelect(blog: blog): void {
    this.selectedBlog = blog;
  }
}

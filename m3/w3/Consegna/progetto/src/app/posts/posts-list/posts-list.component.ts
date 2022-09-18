import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor(private postSvc:PostService) { }

  posts:Post[] = [];
  
  ngOnInit(): void {
    this.postSvc.getAll().subscribe(posts => this.posts = posts)
  }

}

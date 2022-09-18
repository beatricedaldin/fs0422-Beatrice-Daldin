import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.scss']
})
export class PostsItemComponent implements OnInit {
  
  @Input() title!: string
  @Input() content!: string
  @Input() username!: string
  @Input() date!: Date

  constructor( private postSvc:PostService) { }

  ngOnInit(): void {
    
  }

}

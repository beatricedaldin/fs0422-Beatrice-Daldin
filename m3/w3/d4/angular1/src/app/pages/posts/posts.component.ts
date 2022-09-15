import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/classes';
import { PostsUsersService } from 'src/app/posts-users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private classesSvc:PostsUsersService) { }
  
  post:Posts = new Posts('','')

  formAction:string = 'create'

  posts:Posts[] = [];

  ngOnInit(): void {
    this.classesSvc.getAllPosts().subscribe(posts => this.posts = posts)
  }

  add(){
    this.classesSvc.addPost(this.post).subscribe(res => {
      this.posts.push(res)
      this.post = new Posts('','')
    })
  }

  delete(post:Posts){
    this.classesSvc.deletePost(post).subscribe(res => {
      let index = this.posts.findIndex(p => p.id === post.id)
      this.posts.splice(index,1)
    })
  }
  edit(){
    this.classesSvc.editPost(this.post).subscribe(res => {
      let index = this.posts.findIndex(p => p.id === this.post.id)
      this.posts.splice(index,1, this.post)
      this.formAction = 'create'
    })
  }

  select(post:Posts){
    this.post = Object.assign({},post)
    this.formAction = 'edit'
  }
}

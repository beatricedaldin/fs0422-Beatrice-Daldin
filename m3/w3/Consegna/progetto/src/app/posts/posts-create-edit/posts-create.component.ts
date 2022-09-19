import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { PostService } from 'src/app/post.service';
import { Post } from '../post';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.scss']
})
export class PostsCreateComponent implements OnInit {
  
  

  constructor(private authSvc:AuthService, private postSvc:PostService) { }

  mines: Post[] = []
  s: string[]  = Object.values(this.authSvc.getLogged())
  name: string = this.s[1]
  newPost: Post = new Post ('', '', this.name)
  formAction:string = 'create'

  ngOnInit(): void {
    this.showingMine()
  }

  save(){
    
    this.postSvc.add(this.newPost).subscribe(res=>{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'New Post!',
      text:`You just added something a new post!`,
      showConfirmButton: false,
      timer: 2000
  })
    this.mines.push(this.newPost)
    this.newPost = new Post('','', '')
  })
  }

  edit(){
    this.postSvc.edit(this.newPost, this.newPost.id).subscribe(res => {
      let index = this.mines.findIndex(m => m.id === this.newPost.id)
      this.mines.splice(index,1, this.newPost)
      this.formAction = 'create'
      this.newPost = new Post('','', '')
    })
  }

  delete(newPost:Post){
    this.newPost = newPost
    this.postSvc.delete(this.newPost.id).subscribe(res => {
      let index = this.mines.findIndex(m => m.id === this.newPost.id)
      this.mines.splice(index,1)
      this.newPost = new Post('','', '')
    })
  }

  select(newPost:Post){
    console.log(newPost)
    this.newPost = Object.assign({},newPost)
    this.formAction = 'edit'
  }

  showingMine():void{
    this.postSvc.getAll().subscribe(posts => {
      let obj = posts.filter(post=> post.username == this.name)
      this.mines = obj})
  }


  
  }



import { Component, OnInit } from '@angular/core';
import { Posts, Users } from 'src/app/classes';
import { PostsUsersService } from 'src/app/posts-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private classesSvc:PostsUsersService) { }
  
  user:Users = new Users('','')

  formAction:string = 'create'

  users:Users[] = [];

  ngOnInit(): void {
    this.classesSvc.getAllUsers().subscribe(users => this.users = users)
  }

  add(){
    this.classesSvc.addUser(this.user).subscribe(res => {
      this.users.push(res)
      this.user = new Users('','')
    })
  }

  delete(user:Users){
    this.classesSvc.deleteUser(user).subscribe(res => {
      let index = this.users.findIndex(u => u.id === user.id)
      this.users.splice(index,1)
    })
  }
  edit(){
    this.classesSvc.editUser(this.user).subscribe(res => {
      let index = this.users.findIndex(u => u.id === this.user.id)
      this.users.splice(index,1, this.user)
      this.formAction = 'create'
    })
  }

  select(user:Users){
    this.user = Object.assign({},user)
    this.formAction = 'edit'
  }

}

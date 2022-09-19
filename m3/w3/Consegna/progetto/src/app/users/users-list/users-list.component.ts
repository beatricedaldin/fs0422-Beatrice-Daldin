import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/user.service';
import { User } from '../user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users:User[] = []

  constructor(private userSvc:UserService, private authSvc:AuthService) { 
    
  }

  whoKnows: boolean = true

  ngOnInit(): void {
    this.userSvc.getAll().subscribe(users => this.users = users)
  }

  visible(){
    let userLogged: string[] = Object.values(this.authSvc.getLogged())
    let userRole:string =  userLogged[2]
    if(userRole=='admin'){
      this.whoKnows = false
    }
  }

  

  delete(id:number | undefined){
    
    this.userSvc.delete(id).subscribe(res => {
      let index = this.users.findIndex(u => u.id === id)
      this.users.splice(index,1)
    })
  }
  
}

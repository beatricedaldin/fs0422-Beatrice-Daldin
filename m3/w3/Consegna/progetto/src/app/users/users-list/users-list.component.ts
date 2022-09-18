import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from '../user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users:User[] = []

  constructor(private userSvc:UserService) { }

  ngOnInit(): void {
    this.userSvc.getAll().subscribe(users => this.users = users)
  }

}

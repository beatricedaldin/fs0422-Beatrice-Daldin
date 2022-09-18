import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.scss']
})
export class UsersItemComponent implements OnInit {

  @Input() username!:string

  constructor() { }

  ngOnInit(): void {
  }

}

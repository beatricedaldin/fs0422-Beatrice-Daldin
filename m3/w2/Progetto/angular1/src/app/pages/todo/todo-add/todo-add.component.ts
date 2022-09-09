import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  constructor(private todoSvc: TodosService) { }

    newPost : TodosService = new TodosService('')




  ngOnInit(): void {
  }

}

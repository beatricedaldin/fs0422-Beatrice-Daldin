import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/todos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  constructor( private todoSvc:TodosService) { }

  newTodo: Todo = new Todo ('')


  ngOnInit(): void {
  }

  save(){
    console.log(this.newTodo)
    this.todoSvc.addNewTodo(this.newTodo)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Somenthing to do!',
      text:`You just added something new to do!`,
      showConfirmButton: false,
      timer: 3000
  })
  }



}

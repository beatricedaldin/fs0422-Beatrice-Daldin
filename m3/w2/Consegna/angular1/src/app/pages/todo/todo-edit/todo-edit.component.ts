import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/todos.service';
import Swal from 'sweetalert2';
import { TodoComponent } from '../todo.component';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  title :string ='Hey, you can Update your task here!'
  constructor(private activeRoute:ActivatedRoute, private todoSvc:TodosService, private router:Router, private todo:TodoComponent) { }
  
  editingTodo!: Todo; 
  emptyField = ''
  faXmark = faXmark

  ngOnInit(): void {
    let todosUrl:string = 'http://localhost:3000/todos'
    let id:number = Number(this.activeRoute.snapshot.paramMap.get('id'))
    fetch(todosUrl+'/'+id)
    .then(res => res.json())
      .then(todo => { 
    if(todo){
      this.editingTodo = todo
    }else{
      this.router.navigate(['/'])
    }
  })}

  editTodo(): void{
    this.todoSvc.updateTodo(this.editingTodo)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Updated!',
      text:`You've just updated your task!`,
      showConfirmButton: false,
      timer: 3000
  })
  this.router.navigate(['/'])
    this.todo.showingTodos()
  } 

  close():void{
    this.router.navigate(['/'])
  }
 

}




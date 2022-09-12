import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/todos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  constructor(private todoSvc:TodosService) { }
  todoArr: Todo[] = []
  ngOnInit(): void {
    this.showingAllCompleted()
  }

  showingAllCompleted(){
    this.todoSvc.getAllTodos()
    .then(todos => {
      let obj = todos.filter(todo=> todo.completed == true)
      console.log(obj)
      this.todoArr = obj
    })
  }

  completed(todo:Todo){
    if(todo.completed == false){
       todo.completed = true 
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Task completed!',
      text:`The task ${todo.title} has just been completed!`,
      showConfirmButton: false,
      timer: 3000
  })
      this.todoSvc.completedTodo(todo)
  
} else {
  todo.completed = false
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Chuck it back',
    text:`You've just chucked ${todo.title} back in the list!`,
    showConfirmButton: false,
    timer: 3000
})
this.todoSvc.completedTodo(todo)
}
  this.showingAllCompleted()
  }}

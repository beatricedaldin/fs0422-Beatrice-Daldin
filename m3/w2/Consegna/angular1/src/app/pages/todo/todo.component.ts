import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/todos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private todoSvc:TodosService) { }
  todoArr: Todo[] = []
  
  ngOnInit(): void {
    this.todoSvc.getAllTodos()
    .then(res => {
      this.todoArr = res
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
}



}
delete(todo:Todo){
  Swal.fire({
    position: 'center',
    icon: 'warning',
    title: 'Oh, no!',
    text:`You've just deleted ${todo.title} from your tasks`,
    showConfirmButton: false,
    timer: 3000
})
    this.todoSvc.deleteTodo(todo)

}
}

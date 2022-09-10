import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { ITodo } from './Models/todo';


@Injectable({
  providedIn: 'root'
})
export class TodosService{
  

  constructor(){}

   todosUrl:string = 'http://localhost:3000/todos'
   todosArr:TodosService[] = []

   getAllPosts():Promise<TodosService[]>{
    return new Promise<TodosService[]>((resolve) => {
       setTimeout(() =>{
         let call = fetch(this.todosUrl).then(res => res.json())
         resolve(call)
       },2000)
   })
  }

  addNewPost(todo:TodosService){
    fetch(this.todosUrl, {
      method: 'POST',
      body: JSON.stringify(todo)
    })
    .then(res => res.json())
    .then(res => {
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Somenthing to do!',
          text:`You just added something new to do!`,
          showConfirmButton: false,
          timer: 3000
      })
  })
  }


}

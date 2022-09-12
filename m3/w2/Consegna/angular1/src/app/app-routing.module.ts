import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './pages/completed/completed.component';
import { TodoEditComponent } from './pages/todo/todo-edit/todo-edit.component';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
  {path:'',
  component:TodoComponent,
  children:[{path:'edit/:id',
  component:TodoEditComponent}]
  },
  {path:'completed',
  component:CompletedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

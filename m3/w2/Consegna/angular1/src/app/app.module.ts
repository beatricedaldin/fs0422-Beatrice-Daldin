import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodoAddComponent } from './pages/todo/todo-add/todo-add.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { TodoEditComponent } from './pages/todo/todo-edit/todo-edit.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './sections/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CompletedComponent,
    TodoComponent,
    TodoAddComponent,
    TodoListComponent,
    TodoEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    [SweetAlert2Module.forRoot()]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

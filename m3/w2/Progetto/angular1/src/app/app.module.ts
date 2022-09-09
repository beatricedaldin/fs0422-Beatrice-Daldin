import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './pages/todo/todo.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { HeaderComponent } from './sections/header/header.component';
import { TodoAddComponent } from './pages/todo/todo-add/todo-add.component';
import { TodoEditComponent } from './pages/todo/todo-edit/todo-edit.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletedComponent,
    HeaderComponent,
    TodoAddComponent,
    TodoEditComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

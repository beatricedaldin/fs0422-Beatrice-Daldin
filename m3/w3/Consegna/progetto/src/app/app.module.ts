import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { UsersItemComponent } from './users/users-item/users-item.component';
import { PostsItemComponent } from './posts/posts-item/posts-item.component';
import { PostsCreateComponent } from './posts/posts-create-edit/posts-create.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    UsersListComponent,
    UsersItemComponent,
    PostsItemComponent,
    PostsCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    AuthModule,
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

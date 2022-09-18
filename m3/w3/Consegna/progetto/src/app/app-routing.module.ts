import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForumListComponent } from './forum/forum-list/forum-list.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  {path:'',
  component: PostsListComponent},
  {path:'users',
  component: UsersListComponent,
  canActivate: [AuthGuard]},
  {path:'login',
  component: LoginComponent},
  {path:'signup',
  component: SignupComponent},
  {path:'forum',
  component: ForumListComponent,
  canActivate: [AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

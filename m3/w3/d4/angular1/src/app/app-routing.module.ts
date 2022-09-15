import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [ {
  path: '',
  component: PostsComponent
},
{
  path:'users',
  component: UsersComponent
},
{
  path:'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

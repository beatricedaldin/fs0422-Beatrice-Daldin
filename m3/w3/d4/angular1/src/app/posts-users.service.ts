import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts, Users } from './classes';

@Injectable({
  providedIn: 'root'
})
export class PostsUsersService {

  constructor(private http:HttpClient) { }

  apiPosts:string = 'http://localhost:3000/posts'
  apiUsers:string = 'http://localhost:3000/users'


  getAllPosts():Observable<Posts[]> {
    return this.http.get<Posts[]>(this.apiPosts)
  }

  addPost(post: Posts) {
    return this.http.post<Posts>(this.apiPosts,post)
  }

  editPost(post: Posts) {
    return this.http.put<Posts>(this.apiPosts+'/'+post.id,post)
  }

  deletePost(post: Posts) {
    return this.http.delete<Posts>(this.apiPosts+'/'+post.id)
  }


  getAllUsers():Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUsers)
  }

  addUser(user: Users) {
    return this.http.post<Users>(this.apiUsers,user)
  }

  editUser(user: Users) {
    return this.http.put<Users>(this.apiUsers+'/'+user.id,user)
  }

  deleteUser(user: Users) {
    return this.http.delete<Users>(this.apiUsers+'/'+user.id)
  }

}

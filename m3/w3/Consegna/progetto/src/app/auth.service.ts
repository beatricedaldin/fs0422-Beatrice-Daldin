import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ILogin } from './auth/login/ilogin';
import { User } from './users/user';

type AuthR = {
  accessToken: string,
  user: {
    email: string,
    id: number,
    username: string,
    role: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient, private router:Router) { }

  apiUrl:string = 'http://localhost:3000'

  signup(data:User){
    return this.http.post<AuthR>(this.apiUrl+'/users', data)
  }

  login(data:ILogin){
    return this.http.post<AuthR>(this.apiUrl+'/login', data)
  }

  saveAccessData(data:AuthR){
    localStorage.setItem('access',JSON.stringify(data))
  }

  isLogged():boolean{
    return localStorage.getItem('access') != null
  }

  getLogged(){
    let logged : string | null = localStorage.getItem('access')
    return logged ? JSON.parse(logged).user : null
  }
  getToken(){
    let logged : string | null = localStorage.getItem('access')
    return logged ? JSON.parse(logged).accessToken : null
  }

  logOut(){
    localStorage.removeItem('access')
    this.router.navigate([''])
  }

}

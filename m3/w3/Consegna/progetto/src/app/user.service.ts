import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericCrudService } from './generic-crud.service';
import { User } from './users/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericCrudService<User> {

  constructor(private http:HttpClient) {
    super(http, 'http://localhost:3000/users');
  }
}

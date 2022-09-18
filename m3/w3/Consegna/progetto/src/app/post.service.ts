import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericCrudService } from './generic-crud.service';
import { Post } from './posts/post';

@Injectable({
  providedIn: 'root'
})
export class PostService extends GenericCrudService<Post>{

  constructor(private http:HttpClient) {
    super(http, 'http://localhost:3000/posts')
   }

  }



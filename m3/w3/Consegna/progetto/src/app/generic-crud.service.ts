import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class GenericCrudService<T> {

  constructor(private httpC:HttpClient, protected apiUrl : string) { }

  getAll():Observable<T[]> {
    return this.httpC.get<T[]>(this.apiUrl)
  }

  add(x: T) {
    return this.httpC.post<T>(this.apiUrl,x)
  }

  edit(x: T, id : number) {
    return this.httpC.patch<T>(this.apiUrl+'/'+id,x)
  }

  delete(id: number) {
    return this.httpC.delete<T>(this.apiUrl+'/'+id)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookModel } from '../booklist/booklist.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getbooklist() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  apiurl = 'http://localhost:3000/user';

  getAll() {
    return this.http.get(this.apiurl);
  }

  getLogin(code:any) {
    return this.http.get(this.apiurl + '/' + code); 
  }


  Proceedregister(data: any) {
    return this.http.post(this.apiurl, data);   
  }

  IsloggedIn(){
    return localStorage.getItem('token')!=null;
  }
  

  postBook(data: any) {
    return this.http.post<any>("http://localhost:3000/bookList", data)
      .pipe(map((res: any) => {
        return res;

      }))
  }

  getBooklist() {
    return this.http.get<any>("http://localhost:3000/bookList")
      .pipe(map((res: any) => {
        return res;

      }))
  }

  updateBook(data :any,id:number) {
    return this.http.put<any>("http://localhost:3000/bookList/"+id, data)
      .pipe(map((res: any) => {
        return res;

      }))
  }

  deletebook(id: number) {
    return this.http.delete<any>("http://localhost:3000/bookList/"+id)
      .pipe(map((res: any) => {
        return res;

      }))
  }


}

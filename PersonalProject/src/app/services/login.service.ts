import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private postHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }



  login(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/login', user, { headers: this.postHeaders });
  }


}

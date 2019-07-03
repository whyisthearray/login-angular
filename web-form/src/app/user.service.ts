import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'users';
  private global = "http://localhost:3000/"
  constructor(
    private http: HttpClient) { }

  /** GET hero by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    let url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(this.global + url);
  }

  login(user: String, pass: String): Observable<User> {
    console.dir('zalupa');
    let huy = { login: user, pass: pass };
    console.dir(huy);
    return this.http.post<User>(this.global + 'login', { login: user, pass: pass });
  }

  editUser(id: Number, user: User): Observable<User> {
    let url = `${this.usersUrl}/${id}`;
    return this.http.put<User>(this.global + url, user);
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.global + this.usersUrl, user);
  }

  deleteUser(id: Number): Observable<Boolean> {
    let url = `${this.usersUrl}/${id}`;
    return this.http.delete<Boolean>(this.global + url);
  }
}

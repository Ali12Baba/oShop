import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface User {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private user$ = new Subject<User>();
  constructor(public http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.get(`${environment.LocalhostURL}/` + user);
  }
  get user() {
    return this.user$.asObservable();
  }
  signUp(user: any): Observable<any> {
    this.user$.next(user);
    return this.http.post(`${environment.LocalhostURL}/`, user);
  }
}

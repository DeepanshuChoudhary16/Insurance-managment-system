import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/register`,
      user,
      {
        responseType: 'text'
      }
    );
  }

  login(user: User): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/login`,
      user,
      {
        responseType: 'text'
      }
    );
  }

  saveToken(token: string) {

    localStorage.setItem('token', token);
  }

  getToken(): string | null {

    return localStorage.getItem('token');
  }

  logout() {

    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {

    return !!localStorage.getItem('token');
  }
}
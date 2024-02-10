import { Injectable } from '@angular/core';
import { User } from '../../interfaces/auth';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
  private isLoggedInSubject: boolean = false;

  constructor(private http: HttpClient) {}

  loginUser(credentials: {
    email: string;
    password: string;
  }): Observable<boolean> {
    this.isLoggedInSubject = true;
    return of(true);
  }

  logoutUser(): void {
    this.isLoggedInSubject = false;
  }

  isLoggedIn(): boolean {
    return this.isLoggedInSubject;
  }

  registerUser(userDetails: User) {
    this.isLoggedInSubject = true;
    return this.http.post(`${this.baseUrl}/users`, userDetails);
  }

  getUserByEmile(email: string): Observable<User[]> {
    this.isLoggedInSubject = true;
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }
}

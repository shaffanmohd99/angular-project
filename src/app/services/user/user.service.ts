import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  email: string;
  address: Address;
  company: Company;
}
export interface Address {
  city: string;
  suite: string;
  zipcode: string;
  street: string;
}
export interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`;
  // private apiUrl = `https://jsonplaceholder.typicode.com/users`;

  constructor(private http: HttpClient) {}

  fetchPost(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // createUser(user: any): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.post<any>(this.apiUrl, user, { headers });
  // }

  // deleteUser(userId: number): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}/${userId}`);
  // }
}

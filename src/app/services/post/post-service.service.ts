import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  private apiUrl = `${environment.apiUrl}/posts`;

  constructor(private http: HttpClient) {}

  fetchPost(page: number = 10): Observable<Post[]> {
    // Construct query parameters
    let params = new HttpParams().set('_page', page);

    return this.http.get<Post[]>(this.apiUrl, { params });
  }

  fetchOnePost(id: string | number) {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }
  fetchPostComment(id: string | number) {
    return this.http.get<Comment[]>(`${this.apiUrl}/${id}/comments`);
  }

  // createUser(user: any): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.post<any>(this.apiUrl, user, { headers });
  // }

  // deleteUser(userId: number): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}/${userId}`);
  // }
}

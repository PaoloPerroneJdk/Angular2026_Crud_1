import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from 'src/models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = "http://localhost:3000/posts";

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.apiUrl)
  }

  createPost(post:Posts): Observable<Posts[]> {
    return this.http.post<Posts[]>(this.apiUrl,post)
  }

  getPostById(id: number): Observable<Posts>{
    return this.http.get<Posts>(`${this.apiUrl}/${id}`)
  }
}

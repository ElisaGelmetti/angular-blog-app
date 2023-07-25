import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = 'assets/db.json';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post1[]> {
    return this.http.get<Post1[]>(this.apiUrl);
  }
}
export class Post1 {
  id!: number;
  body!: string;
  title!: string;
  active!: boolean;
}

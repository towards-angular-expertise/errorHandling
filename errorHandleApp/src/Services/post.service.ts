import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/Models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private httpClient:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.apiUrl);
  }

  addPost(post:Post){
    return this.httpClient.post(this.apiUrl,post);
  }
}

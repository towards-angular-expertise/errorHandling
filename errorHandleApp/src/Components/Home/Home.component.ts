import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/Services/post.service';
import { Post } from 'src/Models/post';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private postService:PostService) { }
  postList:Post[];
  ngOnInit() {
    this.getAllPost();
  }

  getAllPost(){
    this.postService.getPosts().subscribe(result=>{
      this.postList = result;
    });
  }
  addPost(title,body){
    // Add post ve add title eklenecek Yemekten sonra !!!
    let objNew = {
      title:title,
      body:body
    };
    this.postList.unshift(objNew);
    
  }

}

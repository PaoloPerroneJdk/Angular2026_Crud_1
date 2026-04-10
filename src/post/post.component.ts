import { Component } from '@angular/core';
import { Posts } from 'src/models/posts';
import { PostsService } from 'src/service/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
 posts: Posts [] =[] ;

 constructor(private postService: PostsService){}

 ngOnInit(): void {
  this.getPost()
 }

 getPost() {
  this.postService.getAllPosts().subscribe({
    next: (posts) => {
      this.posts = posts;
    },
    error: (error) => 
      console.log('post creato male',error)
      
  })
 }
}

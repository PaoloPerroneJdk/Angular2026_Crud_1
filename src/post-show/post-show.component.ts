import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/models/posts';
import { PostsService } from 'src/service/posts.service';

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.css']
})

export class PostShowComponent {
  id!: number;
  post: Posts | null = null;

  constructor(
    private postService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   this.postService.getPostById(this.id).subscribe( data => {
    this.post = data;
   })
  }

 
}


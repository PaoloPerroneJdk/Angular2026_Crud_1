import { Component } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/service/posts.service';
import { FormBuilder,  ReactiveFormsModule } from '@angular/forms';
import { Posts } from 'src/models/posts';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  post: Posts [] =[]
  postForm ! : FormGroup;
    isEdit : boolean = false;
    editingPostId : any | null = null;
    id: string | null = null;
submitted = false;
   constructor(private postService: PostsService, private route : ActivatedRoute, private formBuilder: FormBuilder, private router : Router) {
    
this.postForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required]

    })
  }
  ngOnInit(): void {
    const segments = this.route.snapshot.url;
    const secondSegment = segments[1]?.path;
    if(secondSegment == "edit") {
      this.isEdit = true;
      const id = this.route.snapshot.params["id"];
      this.editPost(id);
    }
  }
  
  onSubmit() {
  if (this.isEdit && this.id) {
    this.postService.updatePost(this.id, this.postForm.value)
      .subscribe(() => {
        this.router.navigate(['/']); // ✅
      });
  } else {
    this.postService.createPost(this.postForm.value)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}

  createNewPost(post:Posts){
    this.postService.createPost(this.postForm.value).subscribe({
      next:() => {
        this.router.navigate([''])
      },
      error:(error)=>{
        console.log("Error")
      }
    })
  }
  
  
  
get title() {
  return this.postForm.get('title')!;
}


get description() {
  return this.postForm.get('description')!;
}

editPost(id : any) : void {
    this.editingPostId = id;
    this.postService.getPostById(id).subscribe({
      next: (post) => {
        this.postForm.patchValue({
          title: post.title,
          description: post.description
        })
      }, 
      error: (error) => {
        console.log("Error while fetching Post", error)
      }
    });

}

 updatePost(id: any, post: Posts) {
    this.postService.updatePost(id, post).subscribe({
      next: () => {
        this.router.navigate(['/post'])
      }, 
      error: (error) => {
        console.log("Error while updating the post", error)
      }
    })
  }
}


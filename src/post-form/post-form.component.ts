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
submitted = false;
   constructor(private postService: PostsService, private route : ActivatedRoute, private formBuilder: FormBuilder, private router : Router) {
    
this.postForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required]

    })
  }
  
  onSubmit(): void {
  this.submitted = true;

  if (this.postForm.invalid) {
    return;
  }

  const formValue = this.postForm.value;

  this.createNewPost(formValue);

  console.log('Creato un nuovo post', formValue);
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

}


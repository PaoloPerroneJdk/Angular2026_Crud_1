import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/service/posts.service';
import { FormBuilder,  ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  postForm ! : FormGroup;
    isEdit : boolean = false;

   constructor(private postService: PostsService, private route : ActivatedRoute, private formBuilder: FormBuilder, private router : Router) {
    
this.postForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required]

    })
  }
  
  onSubmit(){}

}

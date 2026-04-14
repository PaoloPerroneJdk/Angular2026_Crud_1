import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from 'src/post/post.component';
import { PostFormComponent } from 'src/post-form/post-form.component';
import { PostShowComponent } from 'src/post-show/post-show.component';


const routes: Routes = [
 { path: '', component: PostComponent },
 { path: 'post/:id',component:PostShowComponent},
 { path: 'create', component:PostFormComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

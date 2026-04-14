import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { PostComponent } from 'src/post/post.component';
import { PostFormComponent } from 'src/post-form/post-form.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostShowComponent } from '../post-show/post-show.component';

@NgModule({
  declarations: [
    AppComponent,    // ✅ OBBLIGATORIO
    PostComponent,
    PostFormComponent,
    PostShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,ReactiveFormsModule// ✅ routing importato qui
  ],
  providers: [],
  bootstrap: [
    AppComponent     // ✅ OBBLIGATORIO
  ]
})
export class AppModule {}
``
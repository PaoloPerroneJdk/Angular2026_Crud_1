import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostShowComponent } from './post-show.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostsService } from 'src/service/posts.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('PostShowComponent', () => {
  let component: PostShowComponent;
  let fixture: ComponentFixture<PostShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostShowComponent],
      imports: [
        RouterTestingModule, 
        HttpClientTestingModule
        
      ],
      providers: [PostsService]
    });

    fixture = TestBed.createComponent(PostShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
``
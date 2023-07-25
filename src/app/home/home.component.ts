import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private postSvc: PostService) {}

  getPosts(): Post[] {
    this.postSvc.takePosts();
    return this.postSvc.getPosts();
  }
}

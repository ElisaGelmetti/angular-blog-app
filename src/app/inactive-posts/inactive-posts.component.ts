import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent {
  constructor(private postSvc: PostService) {}

  getInactivePosts(): Post[] {
    this.postSvc.takePosts();
    return this.postSvc.getInactivePosts();
  }
}

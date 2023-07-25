import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
  constructor(private postSvc: PostService) {}

  getActivePosts(): Post[] {
    this.postSvc.takePosts();
    return this.postSvc.getActivePosts();
  }
}

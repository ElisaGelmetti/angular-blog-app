import { Component, OnInit } from '@angular/core';
import { Post1, PostsService } from '../posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent implements OnInit {
  inactivePosts: Post1[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.inactivePosts = posts.filter((post) => !post.active);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Post1, PostsService } from '../posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  activePosts: Post1[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.activePosts = posts.filter((post) => post.active);
    });
  }
}

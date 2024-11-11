import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Comment,
  Post,
  PostServiceService,
} from '../../../services/post/post-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-id',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-id.component.html',
  styleUrl: './post-id.component.css',
})
export class PostIdComponent implements OnInit {
  isLoading = false;
  postId: string | null = '';
  post!: Post;
  comments: Comment[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private postService: PostServiceService
  ) {}

  navigatePrevios() {
    this.router.navigate([`post/`]);
  }
  loadPost(id: number | string): void {
    this.isLoading = true;

    this.postService.fetchOnePost(id).subscribe({
      next: (data) => {
        this.post = data;
      },
      error: (error) => {
        console.error('Error fetching posts', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
  loadComment(id: number | string): void {
    this.isLoading = true;

    this.postService.fetchPostComment(id).subscribe({
      next: (data) => {
        this.comments = data;
      },
      error: (error) => {
        console.error('Error fetching posts', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  ngOnInit(): void {
    // Step 2: Access the route parameter (id)
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      this.postId = params.get('id');
      if (id) {
        this.loadPost(id);
        this.loadComment(id);
      }
    });
  }
}

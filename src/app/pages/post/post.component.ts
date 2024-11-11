import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for NgFor and NgIf
import {
  Post,
  PostServiceService,
} from '../../services/post/post-service.service';
import { LoadingComponent } from '../../components/loading/loading.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  currentPage = 1;
  isLoading = true;

  constructor(
    private postService: PostServiceService,
    private router: Router
  ) {}
  navigateToPost(postId: number) {
    this.router.navigate([`post/${postId}`]);
  }

  loadPosts(page: number): void {
    this.isLoading = true;
    this.postService.fetchPost(page).subscribe({
      next: (data) => {
        this.posts = data; // Store API response in posts array
      },
      error: (error) => {
        console.error('Error fetching posts', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
  nextPage(): void {
    this.currentPage++;
    this.loadPosts(this.currentPage);
  }
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPosts(this.currentPage);
    }
  }

  ngOnInit(): void {
    this.loadPosts(this.currentPage);
  }
}

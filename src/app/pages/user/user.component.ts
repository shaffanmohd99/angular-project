import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User, UserService } from '../../services/user/user.service';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  users: User[] = [];
  isLoading = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.fetchPost().subscribe({
      next: (data) => {
        this.users = data; // Store API response in posts variable
      },
      error: (error) => {
        console.error('Error fetching posts', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for NgFor and NgIf
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

interface NavItem {
  label: string;
  link: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  currentPath: string = '';

  navItems: NavItem[] = [
    { label: 'User', link: '/user' },
    { label: 'Post', link: '/post' },
    // {
    //   label: 'Todddo',
    //   link: '/todo',
    //   children: [
    //     { label: 'Submenu 1', link: '/todo/1' },
    //     { label: 'Submenu 2', link: '/todo/2' },
    //     { label: 'Submenu 4', link: '/todo/4' },
    //   ],
    // },
    { label: 'Todo', link: '/todo' },
  ];
  ngOnInit(): void {
    // Set initial path
    this.currentPath = this.router.url;

    // Update currentPath whenever navigation ends
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentPath = event.url;
        console.log('Current path:', this.currentPath);
      });
  }
}

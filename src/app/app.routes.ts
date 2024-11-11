import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { PostComponent } from './pages/post/post.component';
import { TodoComponent } from './pages/todo/todo.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserComponent } from './pages/user/user.component';
import { PostIdComponent } from './pages/post/post-id/post-id.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Parent Layout
    children: [
      { path: '', component: UserComponent }, // Default route
      { path: 'post', component: PostComponent },
      { path: 'post/:id', component: PostIdComponent },
      { path: 'todo', component: TodoComponent },
      { path: 'user', component: UserComponent },
      { path: '**', component: NotFoundComponent },
      //   { path: 'contact', component: ContactComponent },
      // Add more child routes here
    ],
  },

  // Optionally, define routes outside the layout if needed (e.g., login)
  // { path: 'login', component: LoginComponent },
  // { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route
];

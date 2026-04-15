import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html'
})
export class App {
  private http = inject(HttpClient);

  posts: Post[] = [];
  loading = false;
  error = '';

  constructor() {
    this.loadPosts();
  }

  loadPosts() {
    this.loading = true;
    this.error = '';

    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (data) => {
          this.posts = data.slice(0, 10);
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.error = 'Failed to load posts';
          this.loading = false;
        }
      });
  }

}

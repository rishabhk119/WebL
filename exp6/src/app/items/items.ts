import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.html',
  styleUrl: './items.css'
})
export class Items implements OnInit {
  items: any[] = [];
  errorMessage = 'Loading...';

  async ngOnInit() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      if (!response.ok) {
        throw new Error('HTTP error');
      }
      const data = await response.json();
      this.items = data;
      this.errorMessage = '';
    } catch (error) {
      this.errorMessage = 'Unable to load data.';
    }
  }
}
// src/app/items/items.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Post lists</h2>
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `,
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items = ['Post 1', 'Post 2', 'Post 3'];
}
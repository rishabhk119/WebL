import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

  async getItems() {
    const response = await fetch(this.apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch items');
    }

    return response.json();
  }
}
import { Component } from '@angular/core';
import { Items } from './items/items';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Items],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
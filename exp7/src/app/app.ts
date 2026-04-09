import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Item {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  itemForm: FormGroup;
  items: Item[] = [];

  constructor(private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.itemForm.invalid) {
      this.itemForm.markAllAsTouched();
      return;
    }

    const newItem: Item = {
      title: this.itemForm.value.title,
      description: this.itemForm.value.description
    };

    this.items.push(newItem);
    this.itemForm.reset();
  }

  get title() {
    return this.itemForm.get('title');
  }

  get description() {
    return this.itemForm.get('description');
  }
}
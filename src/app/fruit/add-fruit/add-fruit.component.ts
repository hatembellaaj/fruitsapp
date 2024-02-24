import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css'],
})
export class AddFruitComponent implements OnInit {
  newFruit: Fruit = { id: 0, name: '', price: 0, quantity: 0 };

  constructor(private fruitService: FruitService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.fruitService.addFruit(this.newFruit);
      form.resetForm();
    } else {
      // Handle form validation errors
    }
  }
}

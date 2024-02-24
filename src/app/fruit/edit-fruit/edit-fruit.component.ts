import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';

@Component({
  selector: 'edit-fruit',
  templateUrl: './edit-fruit.component.html',
  styleUrls: ['./edit-fruit.component.css']
})
export class EditFruitComponent implements OnInit {
  editedFruit: Fruit = { id: 0, name: '', price: 0, quantity: 0 };

  constructor(private route: ActivatedRoute, private fruitService: FruitService) { }

  ngOnInit(): void {
    this.loadFruit();
  }

  loadFruit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.fruitService.getFruitById(id)
        .subscribe({
          next: (fruit) => {
            this.editedFruit = fruit;

          },
          error: (err) => {
            console.log( `Error fetching fruit: ${err.message}`);
          }
        });
    } 
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.fruitService.updateFruit(this.editedFruit);
      // Rediriger vers une autre page, ou faire une autre action après l'édition
    } else {
      // Handle form validation errors
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css'],
})
export class FruitListComponent implements OnInit {
  fruits: Fruit[] = [];
  showConfirmation: boolean = false;
  fruitToDelete: Fruit | null = null;

  constructor(private fruitService: FruitService, private router:Router) { }

  ngOnInit(): void {
    console.log("into fruits ....");
    this.loadFruits();
  }

  loadFruits() {
    this.fruitService.getFruits().subscribe((data) => {
      this.fruits = data;
    });
  }


  confirmDelete(fruit: Fruit) {
    this.fruitToDelete = fruit;
    this.showConfirmation = true;
  }

  cancelDelete() {
    this.fruitToDelete = null;
    this.showConfirmation = false;
  }

  deleteFruit() {
    if (this.fruitToDelete) {
      this.fruitService.deleteFruit(this.fruitToDelete.id);
      this.fruitToDelete = null;
      this.showConfirmation = false;
      this.loadFruits(); // Recharger la liste des fruits après la suppression
    }
  }
}

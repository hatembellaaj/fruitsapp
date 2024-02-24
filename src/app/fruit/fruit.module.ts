import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { EditFruitComponent } from './edit-fruit/edit-fruit.component';
import { AddFruitComponent } from './add-fruit/add-fruit.component';
@NgModule({
  declarations: [
    FruitListComponent,
    EditFruitComponent,
    AddFruitComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
  ],
  // ...
})
export class FruitModule { }

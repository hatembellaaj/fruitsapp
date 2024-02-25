import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { FruitRoutingModule } from './fruit-routing.module';
@NgModule({
  declarations: [
    FruitListComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    FruitRoutingModule 
  ],
  // ...
})
export class FruitModule { }

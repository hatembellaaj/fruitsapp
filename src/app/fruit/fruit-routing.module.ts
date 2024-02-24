import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFruitComponent } from './add-fruit/add-fruit.component';
import { EditFruitComponent } from './edit-fruit/edit-fruit.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';



const routes: Routes = [
 { path: 'fruits/add', component: AddFruitComponent },
 { path: 'fruits/edit/:id', component: EditFruitComponent },
 { path: 'fruits/list', component: FruitListComponent },
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class FruitRoutingModule { }
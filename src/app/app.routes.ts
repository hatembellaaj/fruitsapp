import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitRoutingModule } from './fruit/fruit-routing.module';

export const routes: Routes = [
    { path: '', redirectTo: 'fruits/list', pathMatch: 'full' } // Rediriger vers la liste des fruits par défaut

];
@NgModule({
    imports: [RouterModule.forRoot(routes), FruitRoutingModule], // Include FruitRoutingModule
    exports: [RouterModule]
})
export class AppRoutingModule { }
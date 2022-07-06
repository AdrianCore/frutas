import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitDetailsComponent } from './fruit-details/fruit-details.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';

const routes: Routes = [
  {path : 'fruit',component : FruitListComponent},
  {path : 'fruit/:id',component : FruitDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

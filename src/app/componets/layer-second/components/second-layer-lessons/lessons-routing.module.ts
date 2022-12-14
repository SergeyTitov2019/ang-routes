import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { TheoryComponent } from "./theory/theory.component";
import { CardsDatailsComponent } from "./theory/cards-datails/cards-datails.component";


const routes: Routes = [
  {path: 'theory', component: TheoryComponent},
  {path: 'theory/:id-lesson', component: CardsDatailsComponent},
  {path: 'practise', component: TheoryComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class LessonsRoutingModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsRoutingModule } from "./lessons-routing.module";
import { SharedModule } from "../../../../shared/shared/shared.module";
import { PractiseComponent } from './practise/practise.component';
import { TheoryComponent } from './theory/theory.component';
import { CardsDatailsComponent } from './theory/cards-datails/cards-datails.component';



@NgModule({
  declarations: [
    PractiseComponent,
    TheoryComponent,
    CardsDatailsComponent
  ],
  imports: [
    CommonModule,
    LessonsRoutingModule,
    SharedModule
  ]
})
export class LessonsModule { }

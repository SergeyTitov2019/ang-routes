import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicButtonComponent } from "../components/buttons/buttons.component";
import { Page404Component } from "../components/page404/page404.component";



@NgModule({
  declarations: [
    DynamicButtonComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
  ],
  exports: [DynamicButtonComponent]
})
export class SharedModule { }

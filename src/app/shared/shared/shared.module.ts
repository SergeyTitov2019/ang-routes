import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicButtonComponent } from "../components/buttons/buttons.component";



@NgModule({
  declarations: [DynamicButtonComponent],
  imports: [
    CommonModule,
  ],
  exports: [DynamicButtonComponent]
})
export class SharedModule { }

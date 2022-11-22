import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './components/angular/angular.component';
import { ReactComponent } from './components/react/react.component';
import { FirstLayerRoutingModule } from "./first-layer.routing/first-layer-routing.module";
import { FirstLayerComponent } from './components/first-layer/first-layer.component';
import { SharedModule } from "../../shared/shared/shared.module";

@NgModule({
  declarations: [
    AngularComponent,
    ReactComponent,
    FirstLayerComponent,
  ],
  imports: [
    CommonModule,
    FirstLayerRoutingModule,
    SharedModule
  ],
})
export class FirstLayerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './components/angular/angular.component';
import { ReactComponent } from './components/react/react.component';
import { FirstLayerRoutingModule } from "./first-layer.routing/first-layer-routing.module";
import { FirstLayerComponent } from './components/first-layer/first-layer.component';
import { SharedModule } from "../../shared/shared/shared.module";
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { PipeComponent } from './components/pipe/pipe.component';

@NgModule({
  declarations: [
    AngularComponent,
    ReactComponent,
    FirstLayerComponent,
    InputComponent,
    OutputComponent,
    PipeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FirstLayerRoutingModule
  ],
})
export class FirstLayerModule { }

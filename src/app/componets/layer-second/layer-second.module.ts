import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondLayer1st } from "./components/second-layer-1st/second-layer-1st";
import { LayerSecondRouteModule } from "./layer-second-route.module";
import {SharedModule} from "../../shared/shared/shared.module";
import {SecondLayerMain} from "./components/second-layer-main/second-layer-main";
import {SecondLayer2nd} from "./components/second-layer-2nd/second-layer-2nd";
import {SecondLayer3d} from "./components/second-layer-3d/second-layer-3d";
import {SecondLayerLessons} from "./components/second-layer-lessons/second-layer-lessons";
import {LessonsModule} from "./components/second-layer-lessons/lessons.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SecondLayer1st,
    SecondLayer2nd,
    SecondLayer3d,
    SecondLayerLessons,
    SecondLayerMain
  ],
  imports: [
    CommonModule,
    LayerSecondRouteModule,
    SharedModule,
    LessonsModule,
    ReactiveFormsModule
  ]
})
export class LayerSecondModule { }

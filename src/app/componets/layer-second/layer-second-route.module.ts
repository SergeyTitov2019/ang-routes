import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SecondLayer1st} from "./components/second-layer-1st/second-layer-1st";
import {SecondLayerMain} from "./components/second-layer-main/second-layer-main";
import {SecondLayer2nd} from "./components/second-layer-2nd/second-layer-2nd";
import {SecondLayer3d} from "./components/second-layer-3d/second-layer-3d";


const routes: Routes = [
  {
    path: '', component: SecondLayerMain,
    children: [
      {path: 'html', component: SecondLayer1st},
      {path: 'css', component: SecondLayer2nd},
      {path: 'prime', component: SecondLayer3d},
    ]
  }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayerSecondRouteModule { }

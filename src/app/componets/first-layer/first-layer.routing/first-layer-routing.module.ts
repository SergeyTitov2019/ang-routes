import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AngularComponent} from "../components/angular/angular.component";
import {ReactComponent} from "../components/react/react.component";
import {FirstLayerComponent} from "../components/first-layer/first-layer.component";
import {InputComponent} from "../components/input/input.component";
import {OutputComponent} from "../components/output/output.component";
import {PipeComponent} from "../components/pipe/pipe.component";
import {Page404Component} from "../../../shared/components/page404/page404.component";


const routes: Routes = [
  {
    path: '', component: FirstLayerComponent,
    children: [
      {path: 'angular', component: AngularComponent, children:[
          {path: 'input', component: InputComponent},
          {path: 'output', component: OutputComponent},
          {path: 'pipe', component: PipeComponent},
        ]},
      {path: 'react', component: ReactComponent},
      {path: '**', component: Page404Component},
    ]
  }]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class FirstLayerRoutingModule {
}

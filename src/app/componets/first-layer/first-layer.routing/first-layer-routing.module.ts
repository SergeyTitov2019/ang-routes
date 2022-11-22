import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AngularComponent } from "../components/angular/angular.component";
import { ReactComponent } from "../components/react/react.component";

const routes: Routes = [
  { path: 'angular', component: AngularComponent },
  { path: 'react', component: ReactComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class FirstLayerRoutingModule { }

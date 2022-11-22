import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ParentComponent } from "../componets/parent/parent.component";
import { ChildComponent } from "../componets/child/child.component";
import {NgrxTestComponent} from "../componets/ngrx-test/ngrx-test.component";
import {LifeCycleComponent} from "../componets/life-cycle/life-cycle.component";
import {HtmlComponent} from "../componets/child/components/html/html.component";
import {CssComponent} from "../componets/child/components/css/css.component";
import {MainComponent} from "../componets/child/components/specialities-components/main/main.component";
import {FrontComponent} from "../componets/child/components/specialities-components/front/front.component";
import {BackComponent} from "../componets/child/components/specialities-components/back/back.component";
import {Page404Component} from "../componets/child/components/specialities-components/page404/page404.component";
import {FirstLayerComponent} from "../componets/first-layer/components/first-layer/first-layer.component";

const routes: Routes = [
  { path: '', redirectTo:'',pathMatch:'full' },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent, children:[
      {path:'html', component: HtmlComponent},
      {path:'css', component: CssComponent},
      {path:'specialities', component: MainComponent, children: [
          {path: '', redirectTo: 'front', pathMatch: 'full'},
          {path: 'front', component: FrontComponent},
          {path: 'back', component: BackComponent},
          // {path: 'back', loadChildren: () => import("../componets/child/components/specialities-components/back/back.component").then(mod => mod.BackComponent)},
          {path:'**', component: Page404Component}

        ]},
    ] },
  { path: 'ngrx-test', component: NgrxTestComponent },
  { path: 'life-cycle', component: LifeCycleComponent },

  { path: 'first-layer', component: FirstLayerComponent },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }

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
import {SecondLayer1st} from "../componets/layer-second/components/second-layer-1st/second-layer-1st";
import {FirstLayerModule} from "../componets/first-layer/first-layer.module";
import {LayerSecondModule} from "../componets/layer-second/layer-second.module";
import {RxjsTestComponent} from "../componets/rxjs-test/rxjs-test.component";
import {RxjsAndObservablesComponent} from "../componets/rxjs-and-observables/rxjs-and-observables.component";
import {FormComponentComponent} from "../componets/form-component/form-component.component";

const routes: Routes = [
  { path: '', redirectTo:'parent',pathMatch:'full' },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent, children:[
      {path:'html', component: HtmlComponent},
      {path:'css', component: CssComponent},
      {path:'specialities', component: MainComponent, children: [
          {path: '', redirectTo: 'front', pathMatch: 'full'},
          {path: 'front', component: FrontComponent},
          {path: 'back', component: BackComponent},
          {path:'**', component: Page404Component}

        ]},
    ] },
  { path: 'ngrx-test', component: NgrxTestComponent },
  { path: 'life-cycle', component: LifeCycleComponent },

  { path: 'first-layer', loadChildren: () => import('../componets/first-layer/first-layer.module').then(m => m.FirstLayerModule) },
  { path: 'second-layer', loadChildren: () => LayerSecondModule  },
  { path: 'rxjs-test', component: RxjsTestComponent },
  { path: 'rxjs-and-observables', component: RxjsAndObservablesComponent },
  { path: 'forms-page', component: FormComponentComponent },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CssComponent} from "../css/css.component";
import {HtmlComponent} from "../html/html.component";
import {FrontComponent} from "../specialities-components/front/front.component";
import {BackComponent} from "../specialities-components/back/back.component";
import {MainComponent} from "../specialities-components/main/main.component";
import {Page404Component} from "../specialities-components/page404/page404.component";

const routes: Routes = [
  // {path: 'main', component: MainComponent,
  //   children: [
  //     {path: 'front', component: FrontComponent},
  //     {path: 'back', component: BackComponent},
  //   ]
  // },
  // {path:'**', component: Page404Component}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SpecialitiesRouterModule {
}

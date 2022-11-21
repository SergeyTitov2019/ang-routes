import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { AppEffects } from "./app.effects";
import { ParentComponent } from './componets/parent/parent.component';
import {ChildComponent} from "./componets/child/child.component";
import { GrandChildComponent } from './componets/grand-child/grand-child.component';
import { LifeCycleComponent } from './componets/life-cycle/life-cycle.component';
import { LifeCycleFullComponent } from './componets/life-cycle/life-cycle-full/life-cycle-full.component';
import { RoutingModule } from "./routing/routing.module";
import { NgrxTestComponent } from './componets/ngrx-test/ngrx-test.component';
import { ButtonComponent } from './componets/button/button.component';
import { HtmlComponent } from './componets/child/components/html/html.component';
import { CssComponent } from './componets/child/components/css/css.component';
import { FrontComponent } from './componets/child/components/specialities-components/front/front.component';
import { BackComponent } from './componets/child/components/specialities-components/back/back.component';
import { MainComponent } from './componets/child/components/specialities-components/main/main.component';
import { Page404Component } from './componets/child/components/specialities-components/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    GrandChildComponent,
    LifeCycleComponent,
    LifeCycleFullComponent,
    NgrxTestComponent,
    ButtonComponent,
    HtmlComponent,
    CssComponent,
    FrontComponent,
    BackComponent,
    MainComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ AppEffects ]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

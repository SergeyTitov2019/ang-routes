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
import {FirstLayerModule} from "./componets/first-layer/first-layer.module";
import {SharedModule} from "./shared/shared/shared.module";
import {FirstLayerRoutingModule} from "./componets/first-layer/first-layer.routing/first-layer-routing.module";
import {LayerSecondModule} from "./componets/layer-second/layer-second.module";
import { RxjsTestComponent } from './componets/rxjs-test/rxjs-test.component';
import { RxjsAndObservablesComponent } from './componets/rxjs-and-observables/rxjs-and-observables.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import {SliderModule} from "primeng/slider";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CounterService} from "./services/counter.service";
import { FormComponentComponent } from './componets/form-component/form-component.component';
import { ReactiveFormComponentComponent } from './componets/reactive-form-component/reactive-form-component.component';

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
    Page404Component,
    RxjsTestComponent,
    RxjsAndObservablesComponent,
    SliderComponent,
    FormComponentComponent,
    ReactiveFormComponentComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule,
    FirstLayerModule,
    ReactiveFormsModule,
    FormsModule,
    LayerSecondModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    SliderModule
  ],
  providers: [  ],
  exports: [
    ButtonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
  //   StoreModule.forRoot(reducers, {
  //     runtimeChecks: environment.production
  //         ? {}
  //         : {
  //               strictStateImmutability: true,
  //               strictActionImmutability: true,
  //           },
  // }),
  // EffectsModule.forRoot([RouterEffects, AppNavigationEffects, SettingsSmokebreakEffects, ClientCompanyContextEffects]),
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  // StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GameComponent } from './game/game.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './state/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MultiWindowModule } from 'ngx-multi-window';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({MDI:appReducer}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    MultiWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from './sidebar/sidebar.module';
import { InMemoryModule } from 'shared-components';
import { HttpClientModule } from '@angular/common/http';
import { NglModule } from 'ng-lightning';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    HttpClientModule, 
    InMemoryModule,
    NglModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

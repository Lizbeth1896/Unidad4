import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { TecnologyModule } from './tecnology/tecnology.module';
import {NavbarModule } from './navbar/navbar.module';
import { CrewModule } from './crew/crew.module';
import { DestinationModule } from './destination/destination.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NavbarModule,
    CrewModule,
    TecnologyModule,
    DestinationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

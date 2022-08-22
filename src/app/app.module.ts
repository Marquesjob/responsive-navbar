import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavComponent } from './_components/nav/nav.component';
import { AgentsComponent } from './_pages/agents/agents.component';
import { MapsComponent } from './_pages/maps/maps.component';
import { FunctionsComponent } from './_pages/functions/functions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AgentsComponent,
    MapsComponent,
    FunctionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

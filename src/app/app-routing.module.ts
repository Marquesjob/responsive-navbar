import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsComponent } from './_pages/agents/agents.component';
import { FunctionsComponent } from './_pages/functions/functions.component';
import { MapsComponent } from './_pages/maps/maps.component';

const routes: Routes = [
  {path: 'agents', component: AgentsComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'functions', component: FunctionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

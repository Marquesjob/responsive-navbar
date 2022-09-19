import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGuardGuard } from './_guards/main-guard.guard';
import { AgentsComponent } from './_pages/agents/agents.component';
import { FunctionsComponent } from './_pages/functions/functions.component';
import { MapsComponent } from './_pages/maps/maps.component';

const routes: Routes = [
  {path: 'agents', component: AgentsComponent,  canActivate: [MainGuardGuard]},
  {path: 'maps', component: MapsComponent,  canActivate: [MainGuardGuard]},
  {path: 'functions', component: FunctionsComponent, canActivate: [MainGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

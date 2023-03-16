import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pg1Component } from './pg1/pg1.component';
import { Pg2Component } from './pg2/pg2.component';

const routes: Routes = [
  {
    component: Pg1Component,
    path: 'pg1'
  }, {
    component: Pg2Component,
    path: 'pg2'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

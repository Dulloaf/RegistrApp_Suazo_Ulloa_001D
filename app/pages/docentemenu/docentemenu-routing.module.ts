import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocentemenuPage } from './docentemenu.page';

const routes: Routes = [
  {
    path: '',
    component: DocentemenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocentemenuPageRoutingModule {}

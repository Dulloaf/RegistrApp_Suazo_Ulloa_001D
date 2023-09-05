import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoinicioPage } from './alumnoinicio.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoinicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoinicioPageRoutingModule {}

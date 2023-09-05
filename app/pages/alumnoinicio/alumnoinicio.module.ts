import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoinicioPageRoutingModule } from './alumnoinicio-routing.module';

import { AlumnoinicioPage } from './alumnoinicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoinicioPageRoutingModule
  ],
  declarations: [AlumnoinicioPage]
})
export class AlumnoinicioPageModule {}

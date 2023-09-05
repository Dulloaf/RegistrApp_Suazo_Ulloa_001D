import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocentemenuPageRoutingModule } from './docentemenu-routing.module';

import { DocentemenuPage } from './docentemenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocentemenuPageRoutingModule
  ],
  declarations: [DocentemenuPage]
})
export class DocentemenuPageModule {}

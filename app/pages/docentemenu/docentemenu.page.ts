import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-docentemenu',
  templateUrl: './docentemenu.page.html',
  styleUrls: ['./docentemenu.page.scss'],
})
export class DocentemenuPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  alumnoMenu(){
    this.menuController.open('third');
  }
}

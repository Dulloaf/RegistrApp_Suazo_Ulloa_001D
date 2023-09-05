import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-docenteqr',
  templateUrl: './docenteqr.page.html',
  styleUrls: ['./docenteqr.page.scss'],
})
export class DocenteqrPage implements OnInit {
  
  public alertButtons = ['OK'];

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  
  alumnoMenu(){
    this.menuController.open('third');
  }
}

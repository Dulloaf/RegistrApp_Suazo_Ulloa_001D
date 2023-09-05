import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-alumnomenu',
  templateUrl: './alumnomenu.page.html',
  styleUrls: ['./alumnomenu.page.scss'],
})
export class AlumnomenuPage implements OnInit {
  
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }


  alumnoMenu(){
    this.menuController.open('third');
  }

 
}
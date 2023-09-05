import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-docenteinicio',
  templateUrl: './docenteinicio.page.html',
  styleUrls: ['./docenteinicio.page.scss'],
})
export class DocenteinicioPage implements OnInit {
  

  constructor(private menuController: MenuController,
    private alertController: AlertController) { }

  ngOnInit() {
  }


  alumnoMenu(){
    this.menuController.open('third');
  }

  async Olvide() {
    const alert = await this.alertController.create({
      header: 'Restableciendo Contraseña',
      message: 'Se ha enviado una contraseña provisoria a su email',
      buttons: ['OK'],
    });

    await alert.present();

}
}

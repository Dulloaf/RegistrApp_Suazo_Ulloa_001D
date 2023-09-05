import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrouser',
  templateUrl: './registrouser.page.html',
  styleUrls: ['./registrouser.page.scss'],
})
export class RegistrouserPage implements OnInit {

  persona={
    correo:'',
    password:'',
    password2: ''
  }

  constructor(private menuController: MenuController,
    private alertController: AlertController) { }



    ngOnInit() {
    }

  alumnoMenu(){
    this.menuController.open('third');
  }

  async Enviar() {
    const alert = await this.alertController.create({
      header: 'Registro Exitoso!',
      message: 'Se ha creado un usuario con éxito',
      buttons: ['OK'],
    });

    await alert.present();

    this.persona.correo='';
    this.persona.password='';
    this.persona.password2='';


  }

}
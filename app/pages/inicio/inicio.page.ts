import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private router: Router // Inyecta el Router
  ) {}

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Tipo de Cuenta',
      buttons: [
        {
          text: 'Alumno',
          handler: () => {
            // Redirige a la página de alumno
            this.router.navigate(['/alumnoinicio']);
          },
        },
        {
          text: 'Docente',
          handler: () => {
            // Redirige a la página de docente
            this.router.navigate(['/docenteinicio']);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
  }
}

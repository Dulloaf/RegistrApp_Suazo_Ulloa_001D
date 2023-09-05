import { Component } from '@angular/core';

interface Componente{
  name:string;
  icon:string;
  redirecTo: string;
}

interface Docente{
  name:string;
  icon:string;
  redirecTo: string;
}

interface Alumno{
  name:string;
  icon:string;
  redirecTo: string;
}



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  alumno : Alumno[]=[
    {
      name:'Ayuda',
      icon: 'settings-outline',
      redirecTo:'/ayuda'   
    },

    {
      name:'Configuración',
      icon: 'settings-outline',
      redirecTo:'#'   
    },

    {
      name:'Cerrar Sesión',
      icon: 'home-outline',
      redirecTo:'/inicio'   
    },
    
  ]


  constructor() {}
}


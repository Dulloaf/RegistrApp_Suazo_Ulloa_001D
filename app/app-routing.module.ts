import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registrouser',
    loadChildren: () => import('./pages/registrouser/registrouser.module').then( m => m.RegistrouserPageModule)
  },
  {
    path: 'docenteinicio',
    loadChildren: () => import('./pages/docenteinicio/docenteinicio.module').then( m => m.DocenteinicioPageModule)
  },
  {
    path: 'alumnoinicio',
    loadChildren: () => import('./pages/alumnoinicio/alumnoinicio.module').then( m => m.AlumnoinicioPageModule)
  },
  {
    path: 'docentemenu',
    loadChildren: () => import('./pages/docentemenu/docentemenu.module').then( m => m.DocentemenuPageModule)
  },
  {
    path: 'docenteqr',
    loadChildren: () => import('./pages/docenteqr/docenteqr.module').then( m => m.DocenteqrPageModule)
  },
  {
    path: 'alumnomenu',
    loadChildren: () => import('./pages/alumnomenu/alumnomenu.module').then( m => m.AlumnomenuPageModule)
  },
  {
    path: 'qralumno',
    loadChildren: () => import('./pages/qralumno/qralumno.module').then( m => m.QralumnoPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./pages/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

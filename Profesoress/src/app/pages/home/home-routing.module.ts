import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'clases-hoy/:matricula',
    loadChildren: () => import('./pages/clases-hoy/clases-hoy.module').then( m => m.ClasesHoyPageModule)
  },
  {
    path: 'pasar-lista/:matricula',
    loadChildren: () => import('./pages/pasar-lista/pasar-lista.module').then( m => m.PasarListaPageModule)
  },
  {
    path: 'historial-pases',
    loadChildren: () => import('./pages/historial-pases/historial-pases.module').then( m => m.HistorialPasesPageModule)
  },
  {
    path: 'clases-impartidas/:matricula',
    loadChildren: () => import('./pages/clases-impartidas/clases-impartidas.module').then( m => m.ClasesImpartidasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

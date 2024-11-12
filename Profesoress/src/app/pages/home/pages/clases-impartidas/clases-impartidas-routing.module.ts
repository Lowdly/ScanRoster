import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasesImpartidasPage } from './clases-impartidas.page';

const routes: Routes = [
  {
    path: '',
    component: ClasesImpartidasPage
  },
  {
    path: 'crear-clase',
    loadChildren: () => import('./pages/crear-clase/crear-clase.module').then( m => m.CrearClasePageModule)
  },
  {
    path: 'horario/:id/:nombre',
    loadChildren: () => import('./pages/horario/horario.module').then( m => m.HorarioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesImpartidasPageRoutingModule {}

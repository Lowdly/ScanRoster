import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesPage } from './opciones.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesPage
  },
  {
    path: 'crear-codigo',
    loadChildren: () => import('./pages/crear-codigo/crear-codigo.module').then( m => m.CrearCodigoPageModule)
  },
  {
    path: 'alumnos-asistidos/:codigo',
    loadChildren: () => import('./pages/alumnos-asistidos/alumnos-asistidos.module').then( m => m.AlumnosAsistidosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosAsistidosPage } from './alumnos-asistidos.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnosAsistidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosAsistidosPageRoutingModule {}

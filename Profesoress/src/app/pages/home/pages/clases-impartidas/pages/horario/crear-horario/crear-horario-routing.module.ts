import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearHorarioPage } from './crear-horario.page';

const routes: Routes = [
  {
    path: '',
    component: CrearHorarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearHorarioPageRoutingModule {}

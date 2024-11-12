import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCodigoPage } from './crear-codigo.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCodigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCodigoPageRoutingModule {}

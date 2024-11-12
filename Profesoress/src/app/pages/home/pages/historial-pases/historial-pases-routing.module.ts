import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialPasesPage } from './historial-pases.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialPasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialPasesPageRoutingModule {}

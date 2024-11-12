import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasesHoyPage } from './clases-hoy.page';

const routes: Routes = [
  {
    path: '',
    component: ClasesHoyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesHoyPageRoutingModule {}

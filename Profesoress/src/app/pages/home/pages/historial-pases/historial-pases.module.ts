import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialPasesPageRoutingModule } from './historial-pases-routing.module';

import { HistorialPasesPage } from './historial-pases.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPasesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HistorialPasesPage]
})
export class HistorialPasesPageModule {}

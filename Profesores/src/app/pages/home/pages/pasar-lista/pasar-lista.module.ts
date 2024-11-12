import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasarListaPageRoutingModule } from './pasar-lista-routing.module';

import { PasarListaPage } from './pasar-lista.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasarListaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [PasarListaPage]
})
export class PasarListaPageModule {}

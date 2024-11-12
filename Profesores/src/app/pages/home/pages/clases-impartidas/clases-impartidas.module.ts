import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasesImpartidasPageRoutingModule } from './clases-impartidas-routing.module';

import { ClasesImpartidasPage } from './clases-impartidas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasesImpartidasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClasesImpartidasPage]
})
export class ClasesImpartidasPageModule {}

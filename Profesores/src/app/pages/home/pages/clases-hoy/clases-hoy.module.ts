import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasesHoyPageRoutingModule } from './clases-hoy-routing.module';

import { ClasesHoyPage } from './clases-hoy.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasesHoyPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClasesHoyPage]
})
export class ClasesHoyPageModule {}

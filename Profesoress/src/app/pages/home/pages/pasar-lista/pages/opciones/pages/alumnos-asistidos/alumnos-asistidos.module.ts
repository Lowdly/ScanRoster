import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosAsistidosPageRoutingModule } from './alumnos-asistidos-routing.module';

import { AlumnosAsistidosPage } from './alumnos-asistidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosAsistidosPageRoutingModule
  ],
  declarations: [AlumnosAsistidosPage]
})
export class AlumnosAsistidosPageModule {}

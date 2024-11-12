import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCodigoPageRoutingModule } from './crear-codigo-routing.module';

import { CrearCodigoPage } from './crear-codigo.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCodigoPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [CrearCodigoPage]
})
export class CrearCodigoPageModule {}

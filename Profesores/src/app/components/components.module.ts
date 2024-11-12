import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBackComponent } from './header-back/header-back.component';
import { IonicModule } from '@ionic/angular';
import { HeaderBackLoginComponent } from './header-back-login/header-back-login.component';



@NgModule({
  declarations: [HeaderBackComponent, HeaderBackLoginComponent],
  exports:[HeaderBackComponent, HeaderBackLoginComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }

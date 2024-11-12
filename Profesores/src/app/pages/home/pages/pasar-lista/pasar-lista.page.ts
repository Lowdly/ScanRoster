/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import * as moment from 'moment';
import { PeticionesDBService } from 'src/app/services/peticiones-db.service';

@Component({
  selector: 'app-pasar-lista',
  templateUrl: './pasar-lista.page.html',
  styleUrls: ['./pasar-lista.page.scss'],
})
export class PasarListaPage implements OnInit {

  itemMateria: any;
  matricula: any;
  mensaje: string;
  diaHoy: string;
  constructor(
    private apiProfe: PeticionesDBService,
    private loadingctl: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.matricula = this.router.url.split('/');
    this.matricula=this.matricula[this.matricula.length - 1];
    moment.locale('es-mx');
    this.diaHoy=moment().format('dddd');
    // console.log(this.diaHoy);
    this.mostarLoading();

  }

  async mostarLoading() {
    const loading = await this.loadingctl.create({
      message: 'Cargando...',
      spinner: 'bubbles'
    });
    await loading.present();
    this.apiProfe.getHorarioHoy(this.matricula, this.diaHoy).subscribe(async (result: any)=>{
     console.log(result.clases);
      if(result.clases){
        this.itemMateria=result.clases;
         console.log(this.itemMateria);
        this.mensaje=null;
      }else{
        this.mensaje=result.msj;
      }
      await loading.dismiss();
    });
  }

  redirecClasesHoy(ruta: string, idClass : number){
    if(ruta == 'opciones' || ruta == 'pasar-lista'){
      return `${ruta}/${idClass}`;
      console.log(`${ruta}/${idClass}` )
    }else 
      return ruta;
  }
}




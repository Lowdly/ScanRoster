/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { PeticionesDBService } from 'src/app/services/peticiones-db.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-clases-hoy',
  templateUrl: './clases-hoy.page.html',
  styleUrls: ['./clases-hoy.page.scss'],
})
export class ClasesHoyPage implements OnInit {

  itemMateria:any;
  matricula:any;
  mensaje:string;
  diaHoy:string;
  constructor(
    private apiProfe:PeticionesDBService,
    private loadingctl: LoadingController,
    private router:Router
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
  
    console.log("Matrícula:", this.matricula);
    console.log("Día de hoy:", this.diaHoy);
  
    this.apiProfe.getHorarioHoy(this.matricula, this.diaHoy).subscribe({
      next: async (result: any) => {
        console.log(result.clases);
        if (result.clases) {
          this.itemMateria = result.clases;
          this.mensaje = null;
        } else {
          this.mensaje = result.msj;
        }
        await loading.dismiss();
      },
      error: async (err) => {
        console.error("Error en la solicitud:", err);
        await loading.dismiss();
        this.mensaje = "Ocurrió un error al cargar los datos.";
      }
    });
  }
  

}
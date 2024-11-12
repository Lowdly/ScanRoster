import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import * as moment from 'moment';
import { PeticionesDBService } from 'src/app/services/peticiones-db.service';

@Component({
  selector: 'app-clases-impartidas',
  templateUrl: './clases-impartidas.page.html',
  styleUrls: ['./clases-impartidas.page.scss'],
})
export class ClasesImpartidasPage implements OnInit{

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
    console.log(this.diaHoy);
    this.mostarLoading();

  }
 
  

  async mostarLoading() {
    const loading = await this.loadingctl.create({
      message: 'Cargando...',
      spinner: 'bubbles'
    });
    await loading.present();
    this.apiProfe.GetClases(this.matricula).subscribe(async (result:any)=>{
      // console.log(result);
      if(result.clases){
        this.itemMateria=result.clases;
        this.mensaje=null;
      }else{
        this.mensaje=result.msj;
      }
      await loading.dismiss();
    });
  }

  recargarClases(){
    this.mostarLoading();
  }

}
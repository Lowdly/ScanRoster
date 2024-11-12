/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { ParametrosPagesService } from '../../services/parametros-pages.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  profesor: any;
  opcionesHome: any;
  matricula: string;


  constructor(
    private opciones: GetDataService,
    private recibirObj: ParametrosPagesService,
    private router: Router,
    private alertCtl: AlertController,
  ) {
    this.opcionesHome = this.opciones.getOptions();
    this.recibirObj.$getObjeto.subscribe((data: any) => {
      this.profesor = data;
      this.matricula = data.matricula;
      // console.log(`Matricula ${this.matricula}`);
      if (this.profesor.nombre == null) {
        //this.router.navigate(['/inicio']);
      }
    });
  }

  ngOnInit() {
    this.recibirObj.$getObjeto.subscribe().unsubscribe();
  }

  async cerrarSesion(){
    // eslint-disable-next-line no-trailing-spaces
      const alert = await this.alertCtl.create({
        header: '¿Deseas Cerrar Sesion?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary'
          }, {
            text: 'Confirmar',
            handler: () => {
              this.router.navigate(['/inicio']);
            }
          }
        ]
      });
      await alert.present();

  }

  redirecClasesHoy(ruta: string){
    if(ruta=='clases-hoy' || ruta=='pasar-lista' || 'clases-impartidas'){
      return `${ruta}/${this.matricula}`;
    }else{
      return ruta;
    }
  }


}

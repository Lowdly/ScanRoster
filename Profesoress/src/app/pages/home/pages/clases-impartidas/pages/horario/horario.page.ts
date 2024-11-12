import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { PeticionesDBService } from '../../../../../../services/peticiones-db.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {
  matricula:string;
  idClass:any;
  nombreMateria:string;
  mensaje:string;
  horarios:Array<any>;
  lunes:Array<any>;
  martes:Array<any>;
  miercoles:Array<any>;
  jueves:Array<any>;
  viernes:Array<any>;
  constructor(
    private router:Router,
    private peticiones:PeticionesDBService,
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
    let urlArray = this.router.url.split('/');
    this.matricula=urlArray[urlArray.length - 4];
    this.idClass=urlArray[urlArray.length-2];
    this.nombreMateria=urlArray[urlArray.length-1];
    this.nombreMateria=this.nombreMateria.replace('%20', ' ');
    this.obtenerListaHorarios();
  }

  obtenerListaHorarios(){
    this.peticiones.getHorarioID(this.idClass).subscribe((data:any)=>{
      this.horarios=data.horario;
      this.mensaje=data.msj;
    });
  }

  async opcionesActionSheet(titulo:string) {
    const actionSheet = await this.actionSheetController.create({
      header: titulo,
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Editar',
        icon: 'pencil-outline',
        handler: () => {
          console.log('editar clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
  
    await actionSheet.present();
  }
  recargarClases(){
    this.obtenerListaHorarios();
  }

}

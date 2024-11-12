import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionesDBService } from 'src/app/services/peticiones-db.service';

@Component({
  selector: 'app-alumnos-asistidos',
  templateUrl: './alumnos-asistidos.page.html',
  styleUrls: ['./alumnos-asistidos.page.scss'],
})
export class AlumnosAsistidosPage implements OnInit {

  matricula: string;
  idClass: string;
  codigo:string;
  alumnos:Array<any>;
  mensaje:string;


  constructor(
    private router:Router,
    private peticiones:PeticionesDBService
  ) { }

  ngOnInit() {
    this.obtenerParametros();
    this.obtenerLista();
  }


  obtenerParametros(){
    const urlArray = this.router.url.split('/');
    console.log(urlArray);
    this.idClass=urlArray[urlArray.length - 3];
    this.matricula = urlArray[urlArray.length - 5];
    this.codigo=urlArray[urlArray.length-1];
    console.log(this.codigo);
  }

  obtenerLista(){
    this.peticiones.getListaAlums(this.codigo).subscribe((data:any)=>{
      console.log(data);
      const {status} = data;
      if(status){
        this.alumnos=data.alumsAsist;
        this.mensaje=null;
      }else{
        this.mensaje=data.msj;
      }
    });
  }

  recargarClases(){
    this.obtenerLista();
  }

}

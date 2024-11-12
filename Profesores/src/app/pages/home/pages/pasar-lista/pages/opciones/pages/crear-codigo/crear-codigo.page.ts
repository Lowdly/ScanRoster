import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionesDBService } from 'src/app/services/peticiones-db.service';

@Component({
  selector: 'app-crear-codigo',
  templateUrl: './crear-codigo.page.html',
  styleUrls: ['./crear-codigo.page.scss'],
})
export class CrearCodigoPage implements OnInit {

  matricula: string;
  idClass: string;
  codigo:string;
  mensaje:string | undefined;

  constructor(
    private router: Router,
    private peticiones:PeticionesDBService
  ) { }

  ngOnInit() {
    this.obtenerParametros();
    this.generarCodigo();
  }

  obtenerParametros(){
    const urlArray = this.router.url.split('/');
    // console.log(urlArray);
    this.idClass=urlArray[urlArray.length - 2];
    this.matricula = urlArray[urlArray.length - 4];
    // console.log(this.idClass);
  }

  generarCodigo(){
    //<>
    let caracteres="0123456789abcdefABCDEF";
    let codigoAleatorio='';
    for(let x=0;x<=5;x++){
      let rand= Math.floor(Math.random()*caracteres.length);
      codigoAleatorio += caracteres.substr(rand,1);
    }

    this.codigo = `${this.matricula}-${this.idClass}-${codigoAleatorio}`
  }

  asociarCodigo(){
    this.peticiones.postCodigoHorario(this.idClass, this.codigo).subscribe((data:any)=>{
      console.log(data);
      
      this.mensaje=data.msj;
    });
  }

  


}

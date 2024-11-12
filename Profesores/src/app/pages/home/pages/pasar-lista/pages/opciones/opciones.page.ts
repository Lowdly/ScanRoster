import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionesDBService } from '../../../../../../services/peticiones-db.service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit {

  matricula: string;
  idClass: string;
  codigo:string | boolean;

  constructor(
    private router: Router,
    private peticiones:PeticionesDBService
  ) { }

  ngOnInit() {
    this.obtenerParametros();
    this.obtenerCodigo();   
  }

  obtenerParametros(){
    const urlArray = this.router.url.split('/');
    // console.log(urlArray);
    this.idClass=urlArray[urlArray.length - 1];
    this.matricula = urlArray[urlArray.length - 3];
    // console.log(this.matricula);
  }

  obtenerCodigo(){
    this.peticiones.getCodigoHot(this.idClass).subscribe((data:any)=>{
      console.log(data);
      
      if(data.status==false){
        this.codigo=false;
      }else{
        const {results} = data;      
      const resultado = results[0];
        const {codigo} = resultado;        
        this.codigo = codigo;
      }
      
    });
  }

  recargarClases(){
    this.obtenerCodigo();
  }

}

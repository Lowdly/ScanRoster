import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PeticionesDBService {
  host:string="http://localhost:8000/";
  constructor(
    private http:HttpClient
  ) { }


  getHorarioHoy(matricula:string, dia:string){
    return this.http.get(`${this.host}profesores/horario/${matricula}/${dia}`);
  }
  getListaAlums(codigo:string ){
    return this.http.get(`${this.host}profesores/lista/alums/${codigo}`);
  }
  GetClases(matricula:string){
    return this.http.get(`${this.host}profesores/clases/${matricula}`);
  }

  postCodigoHorario(horario:string, codigo:string){
    return this.http.post(`${this.host}profesores/lista/${horario}`,{codigo});
  }

  postCrearClase(matricula:string, body:any){
    return this.http.post(`${this.host}profesores/clase/${matricula}`,body);
  }
  
  postHorario(idCLase:string, body:any){
    return this.http.post(`${this.host}profesores/horario-c/${idCLase}`,body);
  }

  getHorarioID(idClass:Number){
    return this.http.get(`${this.host}profesores/horario-id/${idClass}`);
  }

  getCodigoHot(idHorario:string){
    return this.http.get(`${this.host}profesores/lista/passList-c/${idHorario}` );
  }

}

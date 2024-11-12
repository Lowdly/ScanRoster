import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  host:string='http://localhost:8000';


  constructor(
    private http:HttpClient
  ) { }

  buscarProf(matricula:string){
    return this.http.get(`${this.host}/auth/profesor-E/${matricula}`);
  }

  autenticarProfesor(matricula:string, password:string){
    return this.http.post(`${this.host}/auth/profesor/${matricula}`,{password});
  }

  registrarProfe(form:any){
    return this.http.post(`${this.host}/registro/profesor`,form);
  }

  


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeticionesDBService } from '../../../../../../../services/peticiones-db.service';

@Component({
  selector: 'app-crear-horario',
  templateUrl: './crear-horario.page.html',
  styleUrls: ['./crear-horario.page.scss'],
})
export class CrearHorarioPage implements OnInit {
  form: FormGroup;
  matricula:string;
  idClass:string;
  nombreMateria:string;
  mensaje:string;
  status:string;
  validacion:boolean;

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private peticiones:PeticionesDBService,
  ) { 
    this.form=this.formBuilder.group({
      horaInit:['', Validators.required],
      horaFin:['', Validators.required],
      salon:['', Validators.required],
      idDiaSemana:['', Validators.required],
    });
  }

  ngOnInit() {
    let urlArray = this.router.url.split('/');
    this.matricula=urlArray[urlArray.length - 5];
    this.idClass=urlArray[urlArray.length-3];
    this.nombreMateria=urlArray[urlArray.length-2];
    this.nombreMateria=this.nombreMateria.replace('%20', ' ');
  }
  

  Registrarse(form: any){
    console.log(form);
    this.peticiones.postHorario(this.idClass,form).subscribe((result:any)=>{
      console.log(result);
      const {status} = result;
      const {msj} = result;
      
      this.mensaje=msj;
      this.status = status;
      
    });
  }

  



}

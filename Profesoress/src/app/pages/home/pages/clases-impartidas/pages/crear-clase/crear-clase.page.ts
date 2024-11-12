import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeticionesDBService } from '../../../../../../services/peticiones-db.service';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.page.html',
  styleUrls: ['./crear-clase.page.scss'],
})
export class CrearClasePage implements OnInit {
  matricula:any;
  form: FormGroup;
  validacion:boolean;
  mensaje:string;
  status:boolean;
  constructor(
    private router:Router,
    private peticiones:PeticionesDBService,
    private formBuilder:FormBuilder,
  ) {
    this.form=this.formBuilder.group({
      nombre:['', Validators.required],
      grupo:['', Validators.required],
    });
   }

  ngOnInit() {
    this.matricula = this.router.url.split('/');
    this.matricula=this.matricula[this.matricula.length - 2];
    // console.log(this.matricula);
    
  }
  Registrarse(form: any){
    console.log(form);
    this.peticiones.postCrearClase(this.matricula,form).subscribe((result:any)=>{
      // console.log(result);
      const {status} = result;
      const {msj} = result;
      
      this.mensaje=msj;
      this.status = status;
      
    });
  }

}

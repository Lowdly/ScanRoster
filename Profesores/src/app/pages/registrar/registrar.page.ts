import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { ParametrosPagesService } from 'src/app/services/parametros-pages.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  form: FormGroup;
  validacion:boolean;
  mensaje:string;
  status:boolean;

  constructor(
    private auth:AutenticacionService,
    private formBuilder:FormBuilder,
    private router:Router,
    private mandarObj:ParametrosPagesService
  ) {
    this.form=this.formBuilder.group({
      matricula:['', Validators.required],
      nombre:['', Validators.required],
      apellidoPa:['', Validators.required],
      apellidoMa:['', Validators.required],
      password:['', Validators.compose([Validators.minLength(8), Validators.required])]
    });
  }

  ngOnInit() {
  }

  Registrarse(form: any){
    console.log(form);
    this.auth.registrarProfe(form).subscribe((result:any)=>{
      console.log(result);
      const {status} = result;
      const {msj} = result;
      
      this.mensaje=msj;
      this.status = status;
      
    });
  }
  buscarProfe(matricula:any){
    // console.log(matricula);
    console.log('aqui');
  }

}

/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { ParametrosPagesService } from '../../services/parametros-pages.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  validacion:boolean;
  mensaje:string;

  constructor(
    private auth:AutenticacionService,
    private formBuilder:FormBuilder,
    private router:Router,
    private mandarObj:ParametrosPagesService,
    private navCtrl:NavController
  ) {
    this.form=this.formBuilder.group({
      matricula:['', Validators.required],
      password:['', Validators.compose([Validators.minLength(8), Validators.required])]
    });
  }

  ngOnInit() {
  }

  iniciarSesion(form: { matricula: string; password: string}){
    const {matricula, password} = form;
    this.auth.autenticarProfesor(matricula, password).subscribe((result:any)=>{
      const {res} = result;
      if(res){
        const {profesor} = result;
        // console.log(profesor);
        this.mandarObj.sendObjeto(profesor);
        
        this.router.navigate(['/home']);
      }else{
        const {msj} = result;
        this.mensaje=msj;
      }
      this.validacion=res;
    });
  }
  buscarProfe(matricula:any){
    // console.log(matricula);
    console.log('aqui');
  }

}

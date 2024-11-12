import { Connection } from "mysql";
class Auth {
    constructor() {
        
    }

    private validarPassword(p1:string, p2:string):Boolean{
        let validacion:Boolean;
        if(p1==p2)
            validacion = true
        else
            validacion = false
        return validacion;
    }
    

    AutenticarProfesor(con:Connection, matricula:string, password:string){
       return new Promise((resolve, reject) => {
        con.query({
            sql:'SELECT * FROM profesor where matricula=? ',
            values:[matricula]
        },(err, results)=>{
            if(err){
                reject({'status':'Ha ocurrido un error'});
            }else{
                if((results as Array<any>).length ==1 ){
                    const passwordAsoc = results[0].password; 
                    if(this.validarPassword(passwordAsoc, password))
                        resolve({profesor:results[0], res:true});
                    else
                        reject({msj:'Contraseña Incorrecta', res:false});      
                }else{
                    reject({'msj':'El profesor no ha sido registrado', res:false});
                }
            }
        });   
       });
    }

    AutenticarAlumno(con:Connection, matricula:string, password:string){
        return new Promise((resolve, reject) => {
            con.query({
                sql:'SELECT * FROM alumnos where matriculaAlum=? ',
                values:[matricula]
            },(err, results)=>{
                if(err){
                    reject({'status':'Ha ocurrido un error'});
                }else{            
                    if((results as Array<any>).length == 1 ){
                        const passwordAsoc = results[0].password; 
                        if(this.validarPassword(passwordAsoc, password))
                            resolve({alumno:results[0], res:true});
                        else
                            reject({msj:'Contraseña Incorrecta', res:false});
                    }else{
                        reject({'msj':'El alumno no ha sido registrado', res:false});
                    }
                }
            });
        });   
    }

    AlumExiste(con:Connection, matricula:string){
        return new Promise((resolve, reject) => {
            con.query({
                sql:'SELECT * FROM alumnos where matriculaAlum=? ',
                values:[matricula]
            },(err, results)=>{
                if(err){
                    reject({'status':'Ha ocurrido un error'});
                }else{            
                    if((results as Array<any>).length == 1 ){
                       resolve({
                           resutl:true,
                           msj:'El alumno existe'
                       });
                    }else{
                        reject({
                            result:false,
                            'msj':'El alumno no ha sido registrado'
                        });
                    }
                }
            });
        });
    }
    ProfExiste(con:Connection, matricula:string){
        return new Promise((resolve, reject) => {
            con.query({
                sql:'SELECT * FROM profesor where matricula=? ',
                values:[matricula]
            },(err, results)=>{
                if(err){
                    reject({'status':'Ha ocurrido un error'});
                }else{            
                    if((results as Array<any>).length == 1 ){
                       resolve({
                           resutl:true,
                           msj:'El profesor existe'
                       });
                    }else{
                        reject({
                            result:false,
                            'msj':'El profesor no ha sido registrado'
                        });
                    }
                }
            });
        });
    }

}




export default Auth;